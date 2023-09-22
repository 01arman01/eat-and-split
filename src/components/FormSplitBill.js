import React from 'react';
import Button from "./Button";

function FormSplitBill({itemData}) {
    console.log(itemData)
    return (
        <form className='splitAndBill'>
            <h2>split a bill with {itemData.name}</h2>
            <div><label>💰 Bill value </label><input type='text'/></div>
            <div><label>🚶‍♂️ Your expense</label><input type='text'/></div>
            <div><label>👫 {itemData.name}'s expense</label><input type='text' disabled/></div>
            <div><label>🤑 Who is paying the bill?</label><select>
                <option>You</option>
                <option>{itemData.name}</option>
            </select></div>
            <div style={{marginTop:'10px'}}><Button >Split Bill</Button></div>
        </form>
    );
}

export default FormSplitBill;