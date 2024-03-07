

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li>
    <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>

    {isOnline===true?(<p>true</p>):(<p>false</p>)}
    
  </div>
  </li>
  )
}

export default FriendListItem