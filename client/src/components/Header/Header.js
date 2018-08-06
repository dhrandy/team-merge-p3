import React from 'react';
import './header.css'

const Header = (props) => {

    return (
      <div>
        <div className='jumbotron'>
        <div className= "time">{(new Date()).toLocaleString()}</div>

        </div>
      </div>
    );
};


export default Header;