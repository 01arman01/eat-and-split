import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import Form from "./components/Form";
import {useState} from "react";
import FormSplitBill from "./components/FormSplitBill";
// import friendsList from "./components/FriendsList";


function App({initialFriends}) {
    const [formIsOpen,setFormIsOpen] = useState(false)
    const [itemId, setItemId] = useState(null)
    const [friendsData,setFriendsData]=useState(initialFriends)
    const newid = + friendsData[friendsData.length - 1].id+1
    const onAddFriends = (item)=>{
        setFriendsData([
            ...friendsData,
            item
        ])
        setFormIsOpen(false)
    }
    // let itemId
    const onFormIsOpen = ()=>{
        setFormIsOpen(!formIsOpen)
    }
    const onChangeItemId = (id)=>{
        setItemId(itemId === id?null:id)
    }

    return (
        <div className="App">
            <div className='slider'>
                <FriendsList
                    initialFriends={initialFriends}
                    friendsData={friendsData}
                    onChangeItemId={onChangeItemId}
                    itemId={itemId}

                />
                {formIsOpen && <Form
                    onAddFriends={onAddFriends}
                    newId={newid}
                />}
                <div style={{marginTop:'10px'}}><Button onClick={onFormIsOpen}>{formIsOpen?'Close':'Add friend'}</Button></div>
            </div>
            <div className='splitAndBillContainer' >
                {itemId && <FormSplitBill/>}
            </div>
        </div>
    );
}

export default App;
