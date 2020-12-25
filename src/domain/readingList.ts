import firebase from '../firebase/firebase';
import firestore from '../firebase/firestore';
import type { ApiResponse } from '../api/api';

export type ReadingList = {
  uid: string;
  description: string;
  images: string[];
  title: string;
  url: string;
  createdAt: firebase.firestore.FieldValue;
};

export const getReadingList = async () => {
  const ref = firestore.collection('readingLists').orderBy('createdAt', 'asc');
  const query = ref.where('uid', '==', firebase.auth().currentUser?.uid);

  const result = (await query.get()).docs.map((x) => {
    return x.data() as ReadingList;
  });
  return result;
};

export const addReadingList = async (overview: ApiResponse) => {
  const ref = firestore.collection('readingLists');
  await ref.add({
    uid: firebase.auth().currentUser?.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    ...overview,
  });
};
