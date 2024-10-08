import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { removeToken } from '../../data/local/LocalStorage';
import SocketContext from '../../context/socketContext/SocketContext';
const ITEM_HEIGHT = 48;

const MenuPoint = ({options}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {disconnectedSocket} = React.useContext(SocketContext);
  const open = Boolean(anchorEl);
  const navigation = useNavigate(); 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const actions = (action) => {
    if(action === 'Modificar') navigation('/edit-profile');
    if(action === 'Cerrar sesión') {
      console.log('Cerrando sesión...');
      disconnectedSocket();
      removeToken();
      navigation('/form-layout');
    }
  }
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => {
            actions(option);
            handleClose();
          }}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MenuPoint;