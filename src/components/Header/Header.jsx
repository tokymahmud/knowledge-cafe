import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            <div className='header-right'>
                <a href="">Home</a>
                <a href="">Portfolio</a>
                <a href="">subscribe</a>
                <img src="../../../img/images.jpg" alt="" />
            </div>
            
        </div>
        <hr></hr>
        </div>
    );
};

export default Header;