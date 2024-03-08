import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";



const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={css.FriendListItem}>
    <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p className={css.FriendListItemName} >{name}</p>
    {isOnline===true?(<p>true</p>):(<p>false</p>)}
  </div>
  </li>
  )
}

export default FriendListItem