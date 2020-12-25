import { useEffect, useState } from 'react';
import '../../App.css';
import firebase from '../../firebase/firebase';
import { getReadingList, addReadingList } from '../../domain/readingList';
import type { ReadingList } from '../../domain/readingList';
import { getPreview } from '../../api/api';

export type UseList = {
  state: {
    readingLists: ReadingList[] | null;
  };
  func: {
    logout: () => void;
    foo: () => Promise<void>;
    addList: () => Promise<void>;
  };
};

const useList = (): UseList => {
  const [readingLists, setReadingLists] = useState<ReadingList[] | null>(null);

  useEffect(() => {
    (async () => {
      const fetchedReadingLists = await getReadingList();
      setReadingLists(fetchedReadingLists);
    })();
  }, []);

  const logout = () => {
    firebase.auth().signOut();
  };

  const foo = async () => {
    console.log(readingLists);
  };

  const addList = async () => {
    /* eslint-disable no-undef */
    // @ts-ignore
    chrome.tabs.getSelected(async (tab: { url: string }) => {
      const { url } = tab;
      const overview = await getPreview(url);
      await addReadingList(overview);
      const fetchedReadingList = await getReadingList();
      setReadingLists(fetchedReadingList);
    });
    /* eslint-enable no-undef */
  };
  return { state: { readingLists }, func: { logout, foo, addList } };
};

export default useList;
