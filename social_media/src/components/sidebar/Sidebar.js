import "./sidbar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {Users} from "../../dummyData";
import BestFriend from "../bestFriend/BestFriend";

const Sidebar = () => {
    return (
        <div className="sidebar">    
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Course</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {
                        Users.map((u) => (
                            <BestFriend key={u.id} user={u}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;