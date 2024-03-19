import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import {Link} from 'react-router-dom';
const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/Home" style={{textDecoration: "none"}}>
                    <span className="logo">NuSu</span>
                </Link>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks">Homepage</span>
                    <span className="topbarLinks">Timeline</span>
                    </div>
                <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon></PersonIcon>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon></ChatIcon>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon></NotificationsIcon>
                    <span className="topbarIconBadge">3</span>
                </div>
                    <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;