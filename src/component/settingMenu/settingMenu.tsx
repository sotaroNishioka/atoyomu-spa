import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import firebase from 'firebase';
import { SettingContext } from '../../page/App';
import { unShowRead, showRead } from '../../domain/userSetting';

const SettingMenu = () => {
  const userSetting = useContext(SettingContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    firebase.auth().signOut();
  };

  const onClickUnShowRead = async () => {
    const user = firebase.auth().currentUser;
    if (user === null) {
      return;
    }
    await unShowRead(user.uid);
    handleClose();
  };
  const onClickShowRead = async () => {
    const user = firebase.auth().currentUser;
    if (user === null) {
      return;
    }
    await showRead(user.uid);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onClickLogout}>ログアウト</MenuItem>
        {userSetting?.showRead === true ? (
          <MenuItem onClick={onClickUnShowRead}>
            検索時に既読記事を表示しない
          </MenuItem>
        ) : (
          <MenuItem onClick={onClickShowRead}>
            検索時に既読記事を表示する
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default SettingMenu;
