import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon     */}
            <TwitterIcon className="icontwt"/>

            {/* sidebar options   */}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={ SupervisorAccountIcon} text="Communities"/>
            <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>






            {/* Button     */}
           <button className="sidebar__tweet">Tweet</button>
        </div>
    )
}

export default Sidebar
