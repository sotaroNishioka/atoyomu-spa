import {
  createStyles,
  makeStyles,
  Theme,
  fade,
} from '@material-ui/core/styles';

export type ListStyles = {
  classes: Record<
    | 'button'
    | 'root'
    | 'searchArea'
    | 'buttonArea'
    | 'searchIcon'
    | 'inputRoot'
    | 'cardArea'
    | 'inputInput',
    string
  >;
};

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
    cardArea: {
      justifyContent: 'center',
    },
  })
);

export default listStyles;
