import React, {useEffect, useState} from 'react';
import Button from "./Button";

function FormSplitBill(
    {
        itemData,
        itemId,
        onChangeFFriendBillStatus,
        chaneItemId
    }) {

    const [bill, setBill] = useState('')
    const [paidByUSer, setPaidByUser] = useState('')
    const [whoIsPaid, setWhoIsPaid] = useState('you')

    useEffect(() => {
        console.log('asdfasdf')
        setBill('')
        setPaidByUser('')
        setWhoIsPaid('you')
    }, [itemId])
    const bilStatusChange = (e) => {
        e.preventDefault()
        if(!bill || !paidByUSer)return;
        if((bill - paidByUSer)<0){
            return
        }
        let billCount
        if(whoIsPaid === itemData.name){
             billCount = itemData.balance - Number(paidByUSer)
        }else if(whoIsPaid === 'you'){
            billCount = itemData.balance + bill - paidByUSer
        }
        onChangeFFriendBillStatus(billCount,itemId)
        chaneItemId(null)
    }

    const onChangeBill = (newBill)=>{
       if(isNaN(newBill)){
           return false
       }else {
       setBill(newBill)}
    }
    const onChangePaidByUser = (newPaidByUser)=>{
        if(isNaN(newPaidByUser)){
            return false
        }else {
            setPaidByUser(newPaidByUser)
        }
    }

    return (
        <form className='splitAndBill' onSubmit={bilStatusChange}>
            <h2>split a bill with {itemData.name}</h2>
            <div>
                <label>💰 Bill value </label>
                <input type='text' value={bill} onChange={e => onChangeBill(Number(e.target.value))}/>
            </div>
            <div>
                <label>🚶‍♂️ Your expense</label>
                <input type='text' value={paidByUSer} onChange={e => onChangePaidByUser(Number(e.target.value))}/>
            </div>
            <div>
                <label>👫 {itemData.name}'s expense</label>
                <input type='text' disabled value={Number(bill) - Number(paidByUSer)}/>
            </div>
            <div>
                <label>🤑 Who is paying the bill?</label>
                <select value={whoIsPaid} onChange={e => setWhoIsPaid(e.target.value)}>
                    <option value='you'>You</option>
                    <option value={itemData.name}>{itemData.name}</option>
                </select>
            </div>
            <div style={{marginTop: '10px'}}><Button>Split Bill</Button></div>
        </form>
    );
}

export default FormSplitBill;