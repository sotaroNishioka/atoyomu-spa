import {
  createStyles,
  makeStyles,
  Theme,
  fade,
} from '@material-ui/core/styles';

const listStyles = makeStyles((theme: Theme) =>
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
    inputRoot: {
      width: '100%',
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    cardArea: {
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
      [theme.breakpoints.up('md')]: {
        width: '868px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '1162px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '1750px',
      },
      margin: 'auto',
      columnWidth: theme.spacing(35),
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    footer: {
      top: 'auto',
      bottom: 0,
    },
    footerSearchArea: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '100%',
    },
    footerButtonArea: {
      paddingLeft: theme.spacing(1),
      width: 'auto',
    },
  })
);

export default listStyles;
