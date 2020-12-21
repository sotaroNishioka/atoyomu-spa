import React, { useEffect, useState } from 'react';
import '../../App.css';
import {
  createStyles,
  makeStyles,
  Theme,
  fade,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Button, InputBase } from '@material-ui/core';
import logo from '../../logo.svg';
import firebase from '../../config/firebase';
import firestore from '../../config/firestore';

type ReadingList = {
  uid: string;
  url: string;
  createdAt: firebase.firestore.FieldValue;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    searchArea: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '70%',
      textAlign: 'center',
    },
    buttonArea: {
      paddingLeft: theme.spacing(1),
      width: '30%',
    },
    button: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      width: '100%',
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  })
);

const List = () => {
  const classes = useStyles();
  const [readingLists, setReadingLists] = useState<ReadingList[] | null>(null);
  useEffect(() => {
    const listReadingList = async () => {
      const ref = firestore.collection('readingLists');
      const query = ref.where('uid', '==', firebase.auth().currentUser?.uid);
      const result = (await query.get()).docs.map((x) => {
        return x.data() as ReadingList;
      });
      setReadingLists(result);
    };
    listReadingList();
  }, []);

  const logout = () => {
    console.log(readingLists);
    firebase.auth().signOut();
  };

  const getOverview = async () => {
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://qiita.com/katu_/items/9474ed207326f3a5d02c');
    // xhr.responseType = 'document';
    // xhr.overrideMimeType('text/xml');
    // xhr.onload = () => {
    //   console.log(xhr.response, xhr.responseXML);
    // };
    // xhr.send();
    // const proxyUrl = 'https://qiita.com/';
    // const targetUrl = 'https://qiita.com/katu_/items/9474ed207326f3a5d02c';
    // fetch(targetUrl)
    //   .then((blob) => blob.json())
    //   .then((data) => {
    //     console.table(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     return e;
    //   });
    const downloadUrl = 'https://qiita.com/katu_/items/9474ed207326f3a5d02c';
    const response = await fetch(downloadUrl);
    console.log(response);
    const json = await response.text();
    console.log(json);
    // const string = JSON.stringify(json);
    // const exportTarget = document.getElementById('export');
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchArea}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.buttonArea}>
            <Button className={classes.button} color="inherit">
              あとよむ!!
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={logout}>
          サインアウト
        </button>
        <button type="button" onClick={getOverview}>
          getOverview
        </button>
      </div>
    </div>
  );
};

export default List;
