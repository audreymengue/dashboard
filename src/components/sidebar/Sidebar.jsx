import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MessageIcon from '@mui/icons-material/Message';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarLsitsItem active">
              <LineStyleIcon className='sidebarIcon'/> Home
              </li>
              <li className="sidebarLsitsItem">
              <TimelineIcon className='sidebarIcon'/>Analytics
              </li>
              <li className="sidebarLsitsItem">
              <TrendingUpIcon className='sidebarIcon'/> Sales
              </li>
              
            </ul>
          </div>
          
        </div>

        <div className='sidebarWrapper'>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick menu</h3>
            <ul className="sidebarList">
              <li className="sidebarLsitsItem ">
              <AccountCircleIcon className='sidebarIcon'/> Users
              </li>
              <li className="sidebarLsitsItem">
              <Inventory2Icon className='sidebarIcon'/>Product
              </li>
              <li className="sidebarLsitsItem">
              <TrendingUpIcon className='sidebarIcon'/> Sales
              </li>
              
            </ul>
          </div>
          
        </div>

        <div className='sidebarWrapper'>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarLsitsItem ">
              <MarkEmailReadIcon className='sidebarIcon'/> Mail
              </li>
              <li className="sidebarLsitsItem">
              <MessageIcon className='sidebarIcon'/>Message
              </li>
              <li className="sidebarLsitsItem">
              <FeedbackIcon className='sidebarIcon'/> Feedback
              </li>
              
            </ul>
          </div>
          
        </div>


    </div>
  )
}
