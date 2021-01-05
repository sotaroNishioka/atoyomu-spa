import React from 'react';
import '../../App.css';
import { AppBar, Toolbar, Button, InputBase, Grid } from '@material-ui/core';
import listStyles from './listStyle';
import useList from './useList';
import PreviewCard from '../../component/previewCard/previewCard';

const List: React.FC = () => {
  const { state, func } = useList();
  const classes = listStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchArea}>
            <InputBase
              placeholder="URLを入力"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => {
                func.onInputURL(event.target.value);
              }}
            />
          </div>
          <div className={classes.buttonArea}>
            <Button
              className={classes.button}
              color="inherit"
              onClick={() => func.addList()}
            >
              後で読む
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Grid
        className={classes.cardArea}
        container
        alignItems="center"
        justify="center"
      >
        {state.readingLists?.map((x) => {
          return <PreviewCard key={x.id} overview={x} />;
        })}
      </Grid>

      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchArea}>
            <InputBase
              placeholder="URLを入力"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => {
                func.onInputURL(event.target.value);
              }}
            />
          </div>
          <div className={classes.buttonArea}>
            <Button
              className={classes.button}
              color="inherit"
              onClick={() => func.addList()}
            >
              後で読む
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default List;
