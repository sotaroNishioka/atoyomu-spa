import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import type { ApiResponse } from '../../api/api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      marginBottom: '10px',
      display: 'flex',
    },
    details: {},
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '60px',
      height: '60px',
    },
    controls: {
      display: 'flex',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  })
);

export default function PreviewCard(props: { overview: ApiResponse }) {
  const classes = useStyles();
  const { overview } = props;

  return (
    <Link href={overview.url} target="brank">
      <Card className={classes.root}>
        {/* <CardMedia
          className={classes.cover}
          image={overview.images && overview.images[0]}
          title={overview.title}
        /> */}
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {overview.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {overview.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
