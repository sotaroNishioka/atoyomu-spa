import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAXJia-EKy3_xpbJ6acJ6UZTzsAJBwCmyE',
  authDomain: 'atoyomu-app.firebaseapp.com',
  projectId: 'atoyomu-app',
  storageBucket: 'atoyomu-app.appspot.com',
  messagingSenderId: '887671398526',
  appId: '1:887671398526:web:537eb58f336ef30cc0782f',
  measurementId: 'G-GN6FWFMH8H',
};

firebase.initializeApp(config);

export default firebase;
