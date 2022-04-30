import React from 'react';
import './Header.css'
import HeaderOption from './HeaderOption';
import logo from './linkedin.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { BusinessCenter, Chat, Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch} from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';


function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    };
  return (
      <div className='header'>
          <div className='header__left'>
              <img src={logo} alt='icon'/>
              <div className='header__search'>
                  <SearchIcon /> 

                  <input placeholder='Search' type="text"/>
              </div>
          </div>

          <div className='header__right'>
              <HeaderOption Icon={HomeIcon} title='Home'/>
              <HeaderOption Icon={SupervisorAccount} title='My Network'/>
              <HeaderOption Icon={BusinessCenter} title='Jobs'/>
              <HeaderOption Icon={Chat} title='Messaging'/>
              <HeaderOption Icon={Notifications} title='Notifications'/>
              <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp}/>
                
          </div>

      </div>
  
    )
}

export default Header;
