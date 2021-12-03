import {
  collection,
  FieldValue,
  where,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getDocs,
} from 'firebase/firestore';
import React from 'react';
import { firebaseAuth, db } from '../firebase/firebase';
import tokenize from '../util/tokenize';

export type ReadingList = {
  id: string;
  uid: string;
  url: string;
  description: string;
  images: string[];
  title: string;
  createdAt: FieldValue;
  status: 'READ' | 'UNREAD' | 'DELETED';
};

export const subscReadingList = (
  setReadingLists: React.Dispatch<React.SetStateAction<ReadingList[] | null>>
) => {
  const q = query(
    collection(db, 'readingLists'),
    where('uid', '==', firebaseAuth.currentUser?.uid),
    where('status', '==', 'UNREAD'),
    orderBy('createdAt', 'desc')
  );

  const unsubscribe = onSnapshot(q, (snap) => {
    const data = snap.docs.map((x) => {
      const docData = x.data();
      return {
        id: x.id,
        ...docData,
      } as ReadingList;
    });
    setReadingLists(data);
  });
  return () => unsubscribe();
};

export const addReadingList = async (url: string) => {
  await addDoc(collection(db, 'readingLists'), {
    uid: firebaseAuth.currentUser?.uid,
    status: 'UNREAD',
    createdAt: serverTimestamp(),
    url,
  });
};

export const deleteReadingList = async (id: string) => {
  await updateDoc(doc(db, 'readingLists', id), {
    status: 'DELETED',
    updatedAt: serverTimestamp(),
  });
};

export const readReadingList = async (id: string) => {
  await updateDoc(doc(db, 'readingLists', id), {
    status: 'READ',
    updatedAt: serverTimestamp(),
  });
};

export const unreadReadingList = async (id: string) => {
  await updateDoc(doc(db, 'readingLists', id), {
    status: 'UNREAD',
    updatedAt: serverTimestamp(),
  });
};

export const searchReadingList = async (
  keyword: string,
  isShowRead: boolean
) => {
  const statusSetting = isShowRead === true ? ['READ', 'UNREAD'] : ['UNREAD'];
  const keywords = tokenize(keyword);
  const wheres = keywords.map((x) => {
    return where(`tokenMap.${x}`, '==', true);
  });
  const q = query(
    collection(db, 'readingLists'),
    where('uid', '==', firebaseAuth.currentUser?.uid),
    where('status', 'in', statusSetting),
    ...wheres,
    orderBy('createdAt', 'desc')
  );

  const res = await getDocs(q);
  const data = res.docs.map((x) => {
    return x.data() as ReadingList;
  });

  return data;
};
