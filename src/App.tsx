import React, { useState, createContext, useEffect } from 'react';
import firebase from './firebase/firebase';
import LoginPage from './page/login/loginContainer';
import List from './page/list/listContainer';
import { subscUserSetting } from './domain/userSetting';
import type { UserSetting } from './domain/userSetting';

export const SettingContext = createContext<UserSetting | undefined>(undefined);

const App = () => {
  const [userSetting, setUserSetting] = useState<UserSetting | undefined>();
  const [loginUser, setLoginUser] = useState<firebase.User | null>(
    firebase.auth().currentUser
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user == null) return;
      subscUserSetting(user.uid, setUserSetting);
    });
  }, []);

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

  return (
    <SettingContext.Provider value={userSetting}>
      <List />
    </SettingContext.Provider>
  );
};

export default App;
