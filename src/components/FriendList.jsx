import FriendListItem from "./FriendListItem";


const FriendList = ({friends}) => {
  
    // console.log(friends);
  
    return (
    <div>
        <ul>
            {friends.map(friend=>{
                return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
                // return <li>1</li>
            })}
        </ul>
    </div>
  )
}

export default FriendList