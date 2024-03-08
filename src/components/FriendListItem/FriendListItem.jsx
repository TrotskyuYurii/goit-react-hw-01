import css from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";




const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={css.FriendListItem}>
    <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p className={css.FriendListItemName} >{name}</p>
    {isOnline===true?(<p className={css.FriendListItemOnline} >true</p>):(<p className={css.FriendListItemOffline}>false</p>)}
  </div>
  </li>
  )
}

export default FriendListItem