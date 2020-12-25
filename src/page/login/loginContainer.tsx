import React from 'react';
// Modules
// MUI Core
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../firebase/firebase';
import firestore from '../../firebase/firestore';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const { user } = await firebase.auth().signInWithPopup(provider);
  if (user === null) {
    alert('ログインに失敗しました');
    return;
  }
  const docId = firestore.collection('users').doc().id;

  firestore.collection('users').doc(docId).set({
    docId: user.uid,
    name: user.displayName,
    email: user.email,
    lastLoginedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            color="secondary"
            fullWidth
            type="submit"
            variant="contained"
            onClick={googleLogin}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
