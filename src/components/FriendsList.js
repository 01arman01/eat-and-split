import React from 'react';
import FriendItem from "./FriendItem";

function FriendsList({initialFriends}) {
    return (
        <div>
            {
                initialFriends.map((item)=>{
                   return( <FriendItem
                       key={item.id}
                       item={item}
                   />)
                })
            }
        </div>
    );
}

export default FriendsList;