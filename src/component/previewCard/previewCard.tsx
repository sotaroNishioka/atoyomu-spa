import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { DoneOutlined, Delete } from '@material-ui/icons';
import {
  ReadingList,
  deleteReadingList,
  readReadingList,
} from '../../domain/readingList';
import previewCardStyles from './previewCardStyles';

const PreviewCard = (props: { overview: ReadingList }) => {
  const classes = previewCardStyles();
  const { overview } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Link
          underline="none"
          href={overview.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={overview.images && overview.images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {overview.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {(() => {
                  if (overview.description !== '') {
                    return (
                      <Typography variant="body2" color="textSecondary">
                        {overview.description}
                      </Typography>
                    );
                  }
                  return '';
                })()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            className={classes.deleteButton}
            size="small"
            onClick={() => {
              deleteReadingList(overview.id);
            }}
          >
            <Delete color="action" />
          </Button>
          <Button
            className={classes.doneButton}
            size="small"
            onClick={() => {
              readReadingList(overview.id);
            }}
          >
            <DoneOutlined color="action" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PreviewCard;
