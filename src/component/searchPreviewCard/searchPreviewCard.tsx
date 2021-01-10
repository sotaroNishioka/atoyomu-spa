import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import searchPreviewCardStyles from './searchPreviewCardStyles';
import type { ReadingList } from '../../domain/readingList';

const SearchPreviewCard = (props: { overview: ReadingList }) => {
  const { overview } = props;
  const classes = searchPreviewCardStyles(overview);
  return (
    <Card
      className={`${classes.card} ${
        overview.status === 'READ' && classes.disabledCard
      }`}
    >
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
          height={overview.description === '' ? '103px' : '183px'}
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
      </div>
    </Card>
  );
};

export default SearchPreviewCard;
