import css from "../Profile/Profile.module.css";

const Profile = ({name,tag,location, image,stats}) => {
  return (
    <div       className={css.profileWrap} >
  <div>
    <img className={css.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={css.textName} >{name}</p>
    <p className={css.textTag} >@{tag}</p>
    <p className={css.textTag} >{location}</p>
  </div>

  <ul className={css.profileData}>
    <li className={css.profileDataItem}>
      <span className={css.profileDataItemName}>Followers</span>
      <span className={css.profileDataItemValue}>{stats.followers}</span>
    </li>
    <li className={css.profileDataItem}>
      <span className={css.profileDataItemName}>Views</span>
      <span className={css.profileDataItemValue}>{stats.views}</span>
    </li>
    <li className={css.profileDataItem}>
      <span className={css.profileDataItemName}>Likes</span>
      <span className={css.profileDataItemValue}>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile