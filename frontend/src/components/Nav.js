import React from 'react'
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

const Nav = () => {
  return (
   <nav className='bg-sky-900 text-white p-1 font-semibold'>
    <ul className='flex justify-evenly p-1.5'>
        <Link to="/"><HomeIcon/></Link>     
        <Link to="/about" ><AccountCircleIcon/></Link>
        <Link to="/posts" ><MessageIcon/></Link>
        <Link to="/about" ><NotificationsIcon/></Link>
    </ul>
   </nav>
  )
}

export default Nav