import FriendListItem from "../FriendListItem/FriendListItem.jsx";


const FriendList = ({friends}) => {
  
    return (
    <div>
        <ul>
            {friends.map(friend=>{
                return <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
            })}
        </ul>
    </div>
  )
}

export default FriendList