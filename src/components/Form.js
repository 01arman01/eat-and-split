import React from 'react';

function Form(props) {
    return (
        <form className='form'>
            <div><label>👫 Friend name</label><input type='text'/></div>
            <div><label>📷 Image URL</label> <input type='text'/></div>
            <button type='submit'>Add</button>
        </form>
    );
}

export default Form;