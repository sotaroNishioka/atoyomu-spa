import React, { useState, useEffect } from 'react';
import firebase from '../firebase/firebase';
import LoginPage from './login/loginContainer';
import List from './list/listContainer';
import Loading from '../component/loading/loading';
import { subscUserSetting } from '../domain/userSetting';
import type { UserSetting } from '../domain/userSetting';
import SettingContext from '../context/settingContext';

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

  const result = () => {
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

  return <div style={{ width: '450px', height: '800px' }}>{result()}</div>;
};

export default App;
