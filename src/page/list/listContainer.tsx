import React from 'react';
import { AppBar, Toolbar, Button, InputBase } from '@material-ui/core';
import listStyles from './listStyle';
import useList from './useList';
import PreviewCard from '../../component/previewCard/previewCard';
import SettingMenuButton from '../../component/settingMenu/settingMenu';
import SearchPreviewCard from '../../component/searchPreviewCard/searchPreviewCard';

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
              value={state.InputUrl}
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
      {state.inputSearch === '' && (
        <div
          className={classes.cardArea}
          style={func.columnCount(state.readingLists)}
        >
          {state.readingLists?.map((x) => (
            <PreviewCard key={`${x.id}-preview`} overview={x} />
          ))}
        </div>
      )}
      {state.inputSearch !== '' && (
        <div
          className={classes.cardArea}
          style={func.columnCount(state.searchResult)}
        >
          {state.searchResult?.map((x) => (
            <SearchPreviewCard key={`${x.id}-search`} overview={x} />
          ))}
        </div>
      )}
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
