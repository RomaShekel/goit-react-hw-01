import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css"

export default FriendListItem;
function FriendListItem({avatar, name, isOnline}) {
    return(
        <div className={css.divFriend}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(css.status, isOnline ? css.online : css.ofline)}
            >
                {isOnline ? "Online" : "Ofline"}</p>
        </div>

    )
}