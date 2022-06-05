import React from 'react';
import firebase from '../firebase/firebase';
import firestore from '../firebase/firestore';
import tokenize from '../util/tokenize';

export type ReadingList = {
  id: string;
  uid: string;
  url: string;
  description: string;
  images: string[];
  title: string;
  createdAt: firebase.firestore.FieldValue;
  status: 'READ' | 'UNREAD' | 'DELETED';
};

export const subscReadingList = (
  setReadingLists: React.Dispatch<React.SetStateAction<ReadingList[] | null>>
) => {
  const ref = firestore.collection('readingLists').orderBy('createdAt', 'desc');
  const query = ref
    .where('uid', '==', firebase.auth().currentUser?.uid)
    .where('status', '==', 'UNREAD');
  const unsubscribe = query.onSnapshot((snap) => {
    const data = snap.docs.map((doc) => {
      const docData = doc.data();
      return {
        id: doc.id,
        ...docData,
      } as ReadingList;
    });
    setReadingLists(data);
  });
  return () => unsubscribe();
};

export const addReadingList = async (url: string) => {
  const ref = firestore.collection('readingLists');
  await ref.add({
    uid: firebase.auth().currentUser?.uid,
    status: 'UNREAD',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    url,
  });
};

export const deleteReadingList = async (id: string) => {
  const ref = firestore.collection('readingLists').doc(id);
  await ref.update({
    status: 'DELETED',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const readReadingList = async (id: string) => {
  const ref = firestore.collection('readingLists').doc(id);
  await ref.update({
    status: 'READ',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const unreadReadingList = async (id: string) => {
  const ref = firestore.collection('readingLists').doc(id);
  await ref.update({
    status: 'UNREAD',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const searchReadingList = async (
  keyword: string,
  isShowRead: boolean
) => {
  const ref = firestore.collection('readingLists');
  const statusSetting = isShowRead === true ? ['READ', 'UNREAD'] : ['UNREAD'];

  let query = ref
    .where('uid', '==', firebase.auth().currentUser?.uid)
    .where('status', 'in', statusSetting);

  const keywords = tokenize(keyword);
  keywords.forEach((x) => {
    query = query.where(`tokenMap.${x}`, '==', true);
  });
  const res = await query.get();

  const data = res.docs.map((doc) => {
    return doc.data() as ReadingList;
  });

  return data;
};
