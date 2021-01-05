import { createStyles, makeStyles } from '@material-ui/core/styles';

const previewCardStyles = makeStyles(() =>
  createStyles({
    card: {
      marginBottom: '16px',
      width: '95%',
      display: 'flex',
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
    buttonArea: {},
    deleteButton: {
      width: '50%',
    },
    doneButton: {
      width: '50%',
    },
  })
);

export default previewCardStyles;
