import React from 'react';
import firebase from '../firebase/firebase';
import firestore from '../firebase/firestore';
import type { ApiResponse } from '../api/api';

export type ReadingList = {
  id: string;
  uid: string;
  description: string;
  images: string[];
  title: string;
  url: string;
  createdAt: firebase.firestore.FieldValue;
  status: 'READ' | 'UNREAD' | 'DELETED';
};

export const subscReadingList = (
  setReadingLists: React.Dispatch<React.SetStateAction<ReadingList[] | null>>
) => {
  const ref = firestore.collection('readingLists').orderBy('createdAt', 'asc');
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
    console.log(data);
    setReadingLists(data);
  });
  return () => unsubscribe();
};

export const addReadingList = async (overview: ApiResponse) => {
  const ref = firestore.collection('readingLists');
  await ref.add({
    uid: firebase.auth().currentUser?.uid,
    status: 'UNREAD',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    ...overview,
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
