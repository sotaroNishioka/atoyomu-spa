import React, { useState, createContext, useEffect } from 'react';
import firebase from '../firebase/firebase';
import LoginPage from './login/loginContainer';
import List from './list/listContainer';
import Loading from '../component/Loading/loading';

import { subscUserSetting } from '../domain/userSetting';
import type { UserSetting } from '../domain/userSetting';

export const SettingContext = createContext<UserSetting | undefined>(undefined);

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoginUser(user);
      } else {
        setLoginUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading === true) {
    return <Loading />;
  }

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
