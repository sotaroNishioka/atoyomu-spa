import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Avatar, Typography } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import useLogin from './useLogin';
import loginStyle from './loginStyle';

const LoginPage = () => {
  const classes = loginStyle();
  const { func } = useLogin();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <DoneOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          あとよみ！
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={func.googleLogin}
        >
          Google Sign In
        </Button>
      </div>
    </Container>
  );
};

export default LoginPage;
