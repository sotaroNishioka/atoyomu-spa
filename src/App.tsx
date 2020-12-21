import React, { useState } from 'react';
import './App.css';
import firebase from './config/firebase';
import LoginPage from './page/login/loginContainer';
import List from './page/list/listContainer';

function App() {
  const [loginUser, setLoginUser] = useState<firebase.User | null>(
    firebase.auth().currentUser
  );
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoginUser(user);
    } else {
      setLoginUser(null);
    }
  });

  if (loginUser === null) {
    return <LoginPage />;
  }
  return <List />;
}

export default App;
