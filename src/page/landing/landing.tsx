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
        width: '100%',
        color: '#595959',
      },
      content: {
        paddingTop: '350px',
        paddingBottom: '250px',
      },
      title: {
        marginBottom: theme.spacing(4),
        fontWeight: 'bold',
      },
      description: {
        marginBottom: theme.spacing(4),
        fontWeight: 'normal',
      },
      loginButton: {
        borderRadius: '21px',
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box textAlign="center" className={classes.content}>
        <Typography color="primary" className={classes.title} variant="h2">
          ATOYOMU
        </Typography>
        <Typography className={classes.description} variant="subtitle1">
          あとで読むをよりシンプルに管理するアプリケーションです。
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
        backgroundColor: '#f6f6f6',
        padding: theme.spacing(8, 0, 8, 0),
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(8),
          display: 'flex',
        },
      },
      imageArea: {
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(0, 2, 0, 2),
          marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.up('sm')]: {
          width: '60%',
        },
      },
      image: {
        background: `url(${abountImage}) center center no-repeat`,
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
          height: '361px',
        },
        [theme.breakpoints.up('sm')]: {
          height: '448px',
        },
      },
      descriptionArea: {
        [theme.breakpoints.down('sm')]: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.up('sm')]: {
          width: '40%',
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
      <div className={classes.root} color="#595959">
        <div className={classes.imageArea}>
          <Paper elevation={4} className={classes.image} />
        </div>

        <Grid
          className={classes.descriptionArea}
          container
          alignItems="center"
          justify="center"
        >
          <div>
            <Typography
              className={classes.descriptionTitle}
              color="primary"
              variant="h5"
            >
              「あとで読む」をもっと簡単に
            </Typography>
            <div className={classes.descriptionBorder} />
            <Typography
              className={classes.descriptionDetail}
              color="primary"
              variant="subtitle1"
            >
              dummydummydummydummydummydummy
              <br />
              dummydummydummydummydummydummy
              <br />
              dummydummydummydummydummydummy
              <br />
              dummydummydummydummydummydummy
              <br />
            </Typography>
          </div>
        </Grid>
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
