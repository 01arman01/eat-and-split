import React from 'react';
import FriendItem from "./FriendItem";

function FriendsList({friendsData,onChangeItemId,itemId}) {
    return (
        <div>
            {
                friendsData.map((item)=>{
                   return( <FriendItem
                       onChangeItemId={onChangeItemId}
                       itemId={itemId}
                       key={item.id}
                       item={item}
                   />)
                })
            }
        </div>
    );
}

export default FriendsList;