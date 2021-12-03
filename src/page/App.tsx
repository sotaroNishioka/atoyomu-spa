import React, { useState, useEffect } from 'react';
import type { User } from '@firebase/auth';
import { firebaseAuth } from '../firebase/firebase';
import Landing from './landing/landing';
import List from './list/listContainer';
import Loading from '../component/loading/loading';
import { subscUserSetting } from '../domain/userSetting';
import type { UserSetting } from '../domain/userSetting';
import SettingContext from '../context/settingContext';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userSetting, setUserSetting] = useState<UserSetting | undefined>();
  const [loginUser, setLoginUser] = useState<User | null>(
    firebaseAuth.currentUser
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user == null) return;
      subscUserSetting(user.uid, setUserSetting);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((user) => {
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
      return <Landing />;
    }
    return (
      <SettingContext.Provider value={userSetting}>
        <List />
      </SettingContext.Provider>
    );
  };

  return <div>{result()}</div>;
};

export default App;
