import React from 'react';
import '../../App.css';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Button, InputBase } from '@material-ui/core';
import listStyles from './listStyle';
import type { ListStyles } from './listStyle';
import useList from './useList';
import type { UseList } from './useList';
import PreviewCard from '../../component/previewCard/previewCard';

type PageProps = UseList & ListStyles;

const Page: React.FC<PageProps> = (props: PageProps) => {
  const { classes, func, state } = props;
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchArea}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.buttonArea}>
            <Button
              className={classes.button}
              color="inherit"
              onClick={func.addList}
            >
              後で読む
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.cardArea}>
        {state.readingLists?.map((x) => {
          return <PreviewCard overview={x} />;
        })}
      </div>
    </div>
  );
};

const List = () => {
  const { state, func } = useList();
  const classes = listStyles();
  return Page({ classes, state, func });
};

export default List;
