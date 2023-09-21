import React from 'react';
import Button from "./Button";

function FormSplitBill(props) {
    return (
        <form className='splitAndBill'>
            <h2>split a bill with Clark</h2>
            <div><label>💰 Bill value </label><input type='text'/></div>
            <div><label>🚶‍♂️ Your expense</label><input type='text'/></div>
            <div><label>👫 Clark's expense</label><input type='text' disabled/></div>
            <div><label>🤑 Who is paying the bill?</label><select>
                <option>You</option>
                <option>Clark</option>
            </select></div>
            <div style={{marginTop:'10px'}}><Button >Split Bill</Button></div>
        </form>
    );
}

export default FormSplitBill;