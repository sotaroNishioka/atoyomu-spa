import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import { firebaseAuth } from '../../firebase/firebase';
import { unShowRead, showRead } from '../../domain/userSetting';
import SettingContext from '../../context/settingContext';

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
    firebaseAuth.signOut();
  };

  const onClickUnShowRead = async () => {
    const user = firebaseAuth.currentUser;
    if (user === null) {
      return;
    }
    handleClose();
    await unShowRead(user.uid);
  };
  const onClickShowRead = async () => {
    const user = firebaseAuth.currentUser;
    if (user === null) {
      return;
    }
    handleClose();
    await showRead(user.uid);
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
