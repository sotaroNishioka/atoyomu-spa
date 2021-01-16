import { createStyles, makeStyles } from '@material-ui/core/styles';

const previewCardStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: '2px',
      marginBottom: theme.spacing(2),
    },
    card: {
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      width: theme.spacing(35),
      marginBottom: theme.spacing(2),
      breakInside: 'avoid',
      pageBreakInside: 'avoid',
    },
    media: {
      height: 140,
    },
    deleteButton: {
      width: '50%',
    },
    doneButton: {
      width: '50%',
    },
  })
);

export default previewCardStyles;
