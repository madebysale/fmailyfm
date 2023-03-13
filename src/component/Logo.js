import React from 'react';
import mylogo from '../component/fm_logo.png';
import './Form.css';

function Logo() {
    return (
        <div className='logo-container'>
            <img src={mylogo} alt="React Logo" className='img'/>
        </div>
    );
}

export default Logo