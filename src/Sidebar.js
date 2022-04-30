import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user=useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
  <div className="sidebar">
      <div className='sidebar__top'>
          <img src="https://images.unsplash.com/photo-1613745018101-43b48fb0b856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"alt=""/>
          <Avatar src={user.photoUrl} className='sidebar__avatar'>
              {user.email[0]}
          </Avatar>
          <h2>{user.displayname}</h2>
          <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
          <div className='sidebar__stat'>
              <p>who viewed you</p>
              <p className='sidebar__statNumber'>345</p>
          </div>
          <div className='sidebar__stat'>
              <p>views on post</p>
              <p className='sidebar__statNumber'>345</p>
          </div>
      </div>
      <div className='sidebar__buttom'>
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem('programming')}
          {recentItem('softwareengineering')}
          {recentItem('design')}
          {recentItem('developer')}
      </div>
  </div>
    );
}

export default Sidebar;
