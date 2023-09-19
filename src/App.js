import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import Form from "./components/Form";
import {useState} from "react";


function App({initialFriends}) {
    const [formIsOpen,setFormIsOpen] = useState(false)
    const onFormIsOpen = ()=>{
        setFormIsOpen(!formIsOpen)
    }

    return (
        <div className="App">
            <div className='slider'>
                <FriendsList initialFriends={initialFriends}/>
                {formIsOpen && <Form/>}
                <div style={{marginTop:'10px'}}><Button onClick={onFormIsOpen}>{formIsOpen?'Close':'Add friend'}</Button></div>
            </div>
        </div>
    );
}

export default App;
