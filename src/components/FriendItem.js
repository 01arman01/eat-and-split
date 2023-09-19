import React from 'react';
import Button from "./Button";

function FriendItem({item}) {
    return (
        <div className='friendItem'>
            <div className='friendItemHeader'>
                <img src={item.image} alt={item.name}/>
                <div className='description'>
                    <p>{item.name}</p>
                    {item.balance >0 &&<p style={{color:"green"}}>{item.name} owes you  {item.balance}€</p>}
                    {item.balance ===0 &&<p style={{color:"black"}}>You and {item.name} are even</p> }
                    {item.balance < 0 &&<p style={{color:"red"}}> You owe {item.name} {-item.balance}€</p>}
                </div>
                <Button>Select</Button>
            </div>
        </div>
    );
}

export default FriendItem;