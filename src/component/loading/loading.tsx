import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={8}>
        <CircularProgress color="inherit" />
      </Grid>
    </Grid>
  );
};

export default Loading;
