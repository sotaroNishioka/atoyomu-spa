import React from 'react';
import { AppBar, Toolbar, Button, InputBase, Grid } from '@material-ui/core';
import listStyles from './listStyle';
import useList from './useList';
import PreviewCard from '../../component/previewCard/previewCard';
import SearchPreviewCard from '../../component/searchPreviewCard/searchPreviewCard';
import SettingMenuButton from '../../component/settingMenu/settingMenu';

const List: React.FC = () => {
  const { state, func } = useList();
  const classes = listStyles();
  return (
    <div className="App">
      <AppBar position="fixed">
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
              onKeyDown={(event) => {
                func.onEnterInput(event);
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
      <div className={classes.cardArea}>
        {state.inputSearch === '' && (
          <Grid container alignItems="center" justify="center">
            {state.readingLists?.map((x) => {
              return <PreviewCard key={`${x.id}-preview`} overview={x} />;
            })}
          </Grid>
        )}
        {state.inputSearch !== '' && (
          <Grid container alignItems="center" justify="center">
            {state.searchResult.map((x) => {
              return <SearchPreviewCard key={`${x.id}-search`} overview={x} />;
            })}
          </Grid>
        )}
      </div>
      <AppBar className={classes.footer} position="fixed">
        <Toolbar>
          <div className={classes.footerSearchArea}>
            <InputBase
              placeholder="記事を検索"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => {
                func.onInputSearchKeyword(event.target.value);
              }}
            />
          </div>
          <div className={classes.footerButtonArea}>
            <SettingMenuButton />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default List;
