// src/components/FriendList/FriendList.jsx
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "../FriendList/FriendList.module.css"
export default FriendList;
function FriendList(friends) {
    return(
        <ul className={css.listOfFriends}>
        {friends.data.map((friend) => {
            return(
	<li className={css.liFriend} key={friend.id}>
		<FriendListItem 
         name={friend.name}
         avatar={friend.avatar}
         isOnline={friend.isOnline}
           />
	</li>
            )
    })}
        </ul>
    )
}