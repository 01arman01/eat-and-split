import React, {useState} from 'react';

function Form({onAddFriends,newId}) {
    const [name,setName] = useState('')
    const [url,setUrl]=useState('https://i.pravatar.cc/70')
    const formSubmit = (e)=>{
        e.preventDefault()

        if(!name || !url){
            return
        }
        onAddFriends({
            id:newId,
            name:name,
            image:`${url}?u=${newId}`,
            balance:0

        })
        setName('')
        setUrl('https://i.pravatar.cc/70')

    }
    return (
        <form className='form' onSubmit={(e)=>formSubmit(e)}>
            <div><label>👫 Friend name</label><input type='text' value={name} onChange={(e)=>setName(e.target.value)}/></div>
            <div><label>📷 Image URL</label> <input type='text' value={url} onChange={e=>{setUrl(e.target.value)}}/></div>
            <button type='submit' >Add</button>
        </form>
    );
}

export default Form;