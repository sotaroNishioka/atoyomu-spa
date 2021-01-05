import { useEffect, useState } from 'react';
import '../../App.css';
import firebase from '../../firebase/firebase';
import { addReadingList, subscReadingList } from '../../domain/readingList';
import type { ReadingList } from '../../domain/readingList';
import { getPreview } from '../../api/api';

const useList = () => {
  const [readingLists, setReadingLists] = useState<ReadingList[] | null>(null);
  const [InputUrl, setInputUrl] = useState<string>('');

  useEffect(() => {
    subscReadingList(setReadingLists);
  }, []);

  const logout = () => {
    firebase.auth().signOut();
  };

  const foo = async () => {
    console.log(readingLists);
  };

  const addList = async () => {
    if (InputUrl === '') {
      /* eslint-disable no-undef */
      // @ts-ignore
      chrome.tabs.getSelected(async (tab: { url: string }) => {
        const { url } = tab;
        const overview = await getPreview(url);
        await addReadingList(overview);
      });
      /* eslint-enable no-undef */
    }
    const overview = await getPreview(InputUrl);
    await addReadingList(overview);
  };
  const onInputURL = (val: string) => {
    setInputUrl(val);
  };

  return {
    state: { readingLists, InputUrl },
    func: { logout, foo, addList, onInputURL },
  };
};

export default useList;
