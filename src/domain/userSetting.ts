import type { User } from 'firebase/auth';

import {
  addDoc,
  collection,
  doc,
  FieldValue,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';

export type UserSetting = {
  id: string;
  uid: string;
  showRead: boolean;
  updatedAt: FieldValue;
  createdAt: FieldValue;
};

export const createUser = async (user: User) => {
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    showRead: false,
    createAt: serverTimestamp(),
    lastLoginedAt: serverTimestamp(),
  });
};

export const updateUser = async (uid: string) => {
  await updateDoc(doc(db, 'users', uid), {
    lastLoginedAt: serverTimestamp(),
  });
};

export const showRead = async (uid: string) => {
  await updateDoc(doc(db, 'users', uid), { showRead: true });
};

export const unShowRead = async (uid: string) => {
  await updateDoc(doc(db, 'users', uid), { showRead: false });
};

export const getUser = async (user: User) => {
  const usersCollection = collection(db, 'users');
  const res = await getDoc(doc(usersCollection, user.uid));
  return res.data();
};

export const subscUserSetting = (
  uid: string,
  setUserSetting: React.Dispatch<React.SetStateAction<UserSetting | undefined>>
) => {
  const unsb = onSnapshot(doc(db, 'users', uid), (snap) => {
    const data = snap.data() as UserSetting;
    setUserSetting(data);
  });

  return () => unsb();
};
