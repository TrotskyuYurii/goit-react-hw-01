import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "../FriendList/FriendList.module.css";


const FriendList = ({friends}) => {
  
    return (
    <div>
        <ul className={css.FriendList}>
            {friends.map(friend=>{
                return <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            })}
        </ul>
    </div>
  )
}

export default FriendList