import React from 'react';
import firebase from '../firebase/firebase';
import firestore from '../firebase/firestore';

export type UserSetting = {
  id: string;
  uid: string;
  showRead: boolean;
  updatedAt: firebase.firestore.FieldValue;
  createdAt: firebase.firestore.FieldValue;
};

export const createUser = async (user: firebase.User) => {
  await firestore.collection('users').doc(user.uid).set({
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    showRead: false,
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
    lastLoginedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const updateUser = async (uid: string) => {
  await firestore.collection('users').doc(uid).update({
    lastLoginedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const showRead = async (uid: string) => {
  await firestore.collection('users').doc(uid).update({
    showRead: true,
  });
};

export const unShowRead = async (uid: string) => {
  await firestore.collection('users').doc(uid).update({
    showRead: false,
  });
};

export const getUser = async (user: firebase.User) => {
  const ref = firestore.collection('users').doc(user.uid);
  const res = await ref.get();
  return res.data();
};

export const subscUserSetting = (
  uid: string,
  setUserSetting: React.Dispatch<React.SetStateAction<UserSetting | undefined>>
) => {
  const ref = firestore.collection('users').doc(uid);
  const unsubscribe = ref.onSnapshot((snap) => {
    const data = snap.data() as UserSetting;
    setUserSetting(data);
  });
  return () => unsubscribe();
};
