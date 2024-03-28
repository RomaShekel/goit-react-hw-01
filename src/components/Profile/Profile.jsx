// src/components/Profile/Profile.jsx
import css from "./Profile.module.css"
export default Profile;

 function Profile ({name, tag, location, image, stats:{followers, views, likes}}) {
    return (
    <div className={css.profile}>
  <div className={css.divAvatar}>
    <img className={css.avatar}
     src={image}
     alt="User avatar"
    />
    <p className={css.p}>{name}</p>
    <p className={css.grayText}>@{tag}</p>
    <p className={css.grayText}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
    <span>Followers</span>
    <span className={css.boldSpan}>{followers}</span>
    </li>
    <li className={css.listItem}>
     <span>Views</span>
     <span className={css.boldSpan}>{views}</span>
    </li>
    <li className={css.listItem}>
     <span>Likes</span>
     <span className={css.boldSpan}>{likes}</span>
    </li>
  </ul>
</div>
    )
}
