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
      paddingTop: '72px',
      paddingBottom: '60px',
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
