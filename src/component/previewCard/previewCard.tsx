import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions, Link } from '@material-ui/core';
import { DoneOutlined, Delete } from '@material-ui/icons';
import previewCardStyles from './previewCardStyles';
import type { ReadingList } from '../../domain/readingList';
import { deleteReadingList, readReadingList } from '../../domain/readingList';

const PreviewCard = (props: { overview: ReadingList }) => {
  const { overview } = props;
  const classes = previewCardStyles(overview);
  return (
    <Card className={classes.card}>
      <Link
        className={classes.mediaArea}
        underline="none"
        href={overview.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          image={overview.images && overview.images[0]}
          height={overview.description === '' ? '123px' : '203px'}
          onClick={() => {
            window.open(overview.url);
          }}
        />
      </Link>
      <div className={classes.contentArea}>
        <Link
          underline="none"
          href={overview.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.content}>
            <Typography className={classes.title} gutterBottom variant="h6">
              {overview.title}
            </Typography>
            {(() => {
              if (overview.description !== '') {
                return (
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                  >
                    {overview.description}
                  </Typography>
                );
              }
              return '';
            })()}
          </div>
        </Link>
        <CardActions>
          <Button
            className={classes.deleteButton}
            size="small"
            color="primary"
            onClick={() => {
              deleteReadingList(overview.id);
            }}
          >
            <Delete />
          </Button>
          <Button
            className={classes.doneButton}
            size="small"
            color="primary"
            onClick={() => {
              readReadingList(overview.id);
            }}
          >
            <DoneOutlined />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default PreviewCard;
