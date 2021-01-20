import React from 'react';
import './css/bootstrap.css';
import './css/landing.css';
import './css/nivo-lightbox.css';
import './css/default.css';
import './css/font-awasome.css';
import {
  AppBar,
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import bgImage from './image/intro-bg.svg';
import useLogin from '../login/useLogin';
import abountImage from './image/about.png';

const { func } = useLogin();

const Navigation = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      loginButton: {
        borderRadius: 18,
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
      },
    })
  );
  const classes = useStyles();
  return (
    <AppBar color="inherit">
      <Toolbar>
        <Grid justify="space-between" container spacing={1}>
          <img height="34px" alt="icon" src="/image/icon.svg" />
          <Grid>
            <Button
              className={classes.loginButton}
              variant="outlined"
              onClick={func.googleLogin}
              color="primary"
            >
              ログイン
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const Header = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        background: `url(${bgImage}) center center no-repeat`,
        backgroundSize: 'cover',
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
          height: '700px',
          marginTop: theme.spacing(8),
        },
        [theme.breakpoints.down('xs')]: {
          height: '380px',
          marginTop: theme.spacing(6),
        },
      },
      title: {
        marginBottom: theme.spacing(4),
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
          marginTop: theme.spacing(6),
        },
      },
      description: {
        marginBottom: theme.spacing(4),
      },
      loginButton: {
        borderRadius: '21px',
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Box textAlign="center">
          <Typography color="primary" className={classes.title} variant="h1">
            ATOYOMU
          </Typography>
          <Typography className={classes.description} variant="subtitle2">
            あとで読むをシンプルに管理するアプリです。
            <br />
            ブラウザ、スマートフォンからご利用いただけます。
          </Typography>
          <Button
            className={classes.loginButton}
            color="primary"
            variant="outlined"
            onClick={func.googleLogin}
            size="large"
          >
            使ってみる
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

// const Features = () => {
//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Features</h2>
//         </div>
//         <div className="row">
//           <div className="col-xs-6 col-md-3">
//             <i className="fa fa-comments-o" />
//             <h3>Lorem ipsum</h3>
//             <p>Lorem ipsum</p>
//           </div>
//           <div className="col-xs-6 col-md-3">
//             <i className="fa fa-comments-o" />
//             <h3>Lorem ipsum</h3>
//             <p>Lorem ipsum</p>
//           </div>
//           <div className="col-xs-6 col-md-3">
//             <i className="fa fa-comments-o" />
//             <h3>Lorem ipsum</h3>
//             <p>Lorem ipsum</p>
//           </div>
//           <div className="col-xs-6 col-md-3">
//             <i className="fa fa-comments-o" />
//             <h3>Lorem ipsum</h3>
//             <p>Lorem ipsum</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const About = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        maxWidth: '960px',
        margin: 'auto',
      },
      container: {
        width: '100%',
        [theme.breakpoints.up('xs')]: {
          padding: theme.spacing(8, 2, 8, 2),
          display: 'flex',
        },
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(4, 2, 4, 2),
          display: 'block',
        },
      },
      imageArea: {
        [theme.breakpoints.up('xs')]: {
          width: '50%',
        },
        [theme.breakpoints.down('xs')]: {
          marginBottom: theme.spacing(6),
          width: '100%',
        },
      },
      image: {
        background: `url(${abountImage}) center center no-repeat`,
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
          height: '361px',
        },
        [theme.breakpoints.up('xs')]: {
          height: '448px',
        },
      },
      descriptionArea: {
        [theme.breakpoints.up('xs')]: {
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          wordBreak: 'break-all',
          padding: theme.spacing(6),
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          display: 'block',
          padding: theme.spacing(1),
        },
      },
      descriptionTitle: {
        marginBottom: theme.spacing(2),
      },
      descriptionBorder: {
        borderRadius: '8px',
        background: 'linear-gradient(to right, #a6a6a6 0%, #f6f6f6 20%)',
        height: theme.spacing(1),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(2),
      },
      descriptionDetail: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    })
  );
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.imageArea}>
            <Paper elevation={4} className={classes.image} />
          </div>
          <div className={classes.descriptionArea}>
            <Box>
              <Typography
                className={classes.descriptionTitle}
                color="primary"
                variant="h5"
              >
                「あとで読む」をシンプルに
              </Typography>
              <div className={classes.descriptionBorder} />
              <Typography
                className={classes.descriptionDetail}
                color="primary"
                variant="subtitle1"
              >
                dummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummy
                <br />
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

const Landing = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      {/* <Services />
      <Gallery />
      <Testimonials />
      <Team />
      <Contact /> */}
    </div>
  );
};

export default Landing;
