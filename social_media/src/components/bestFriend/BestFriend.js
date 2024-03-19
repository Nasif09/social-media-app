import "./bestFriend.css";

export default function BestFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_fOLDER;
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
