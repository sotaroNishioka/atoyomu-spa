import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB4KgzDRMIT-iNrNdlXgui55oaqi7EE3Ys',
  authDomain: 'atoyomi-app.firebaseapp.com',
  projectId: 'atoyomi-app',
  storageBucket: 'atoyomi-app.appspot.com',
  messagingSenderId: '409653707954',
  appId: '1:409653707954:web:82cb2947f86158664a75ab',
  measurementId: 'G-PPXKJC9YGB',
};

firebase.initializeApp(config);

export default firebase;
