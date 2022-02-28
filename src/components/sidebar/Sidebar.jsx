import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarLsitsItem">
              <LineStyleIcon /> Home
              </li>
              <li className="sidebarLsitsItem">
              <TimelineIcon />Analytics
              </li>
              <li className="sidebarLsitsItem">
              <TrendingUpIcon /> Sales
              </li>
              
            </ul>
          </div>
        </div>

    </div>
  )
}
