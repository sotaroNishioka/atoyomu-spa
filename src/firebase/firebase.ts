import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAXJia-EKy3_xpbJ6acJ6UZTzsAJBwCmyE',
  authDomain: 'atoyomu-app.firebaseapp.com',
  projectId: 'atoyomu-app',
  storageBucket: 'atoyomu-app.appspot.com',
  messagingSenderId: '887671398526',
  appId: '1:887671398526:web:537eb58f336ef30cc0782f',
  measurementId: 'G-GN6FWFMH8H',
};

initializeApp(config);
export const firebaseAuth = getAuth();
export const db = getFirestore();
