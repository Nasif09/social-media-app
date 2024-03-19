import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"



export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_fOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src={`${PF}post/3.jpeg`} alt="" 
                    className="profileCoverImg" 
                    />
                    <img src={`${PF}person/7.jpeg`} alt="" 
                    className="profileUserImg" 
                    />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Nasif Rahman</h4>
                    <span className="profileInfoDesc">Good For Nothing</span>
                </div>
            </div>
            <div className="profileRightTop"></div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
