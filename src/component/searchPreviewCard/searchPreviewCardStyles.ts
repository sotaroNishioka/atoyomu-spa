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
      breakInside: 'avoid',
      pageBreakInside: 'avoid',
      display: 'flex',
    },
    disabledCard: {
      backgroundColor: '#f0f0f0',
    },
    mediaArea: {
      width: '35%',
      height: 'auto',
      cursor: 'pointer',
      display: 'flex',
    },
    media: {
      width: '100%',
    },
    contentArea: {
      width: '65%',
    },
    content: {
      padding: '8px 8px 0 16px',
      overflow: 'hidden',
    },
    title: {
      height: '60px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    description: {
      height: '80px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
);

export default previewCardStyles;
