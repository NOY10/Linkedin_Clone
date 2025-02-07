import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';

function HeaderOption({avatar,Icon,title,onClick}) {

  const user=useSelector(selectUser);
  return (
      <div onClick={onClick} className='headerOption'>
          {Icon && <Icon className='header__icon'/>}
          {avatar && (
            <Avatar className='headerOption__icon'>L</Avatar>
          )}
          <h3 className='headerOption__title'>{title}</h3>

      </div>
  )
}

export default HeaderOption;
