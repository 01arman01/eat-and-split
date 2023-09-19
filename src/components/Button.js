import React from 'react';

function Button({children,onClick}) {
    return (
        <div className='buttonContainer' onClick={onClick}><button>{children}</button></div>
    );
}
export default Button;