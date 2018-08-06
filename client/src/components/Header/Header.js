import React, {Component} from 'react';
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='jumbotron'>
          <div className= "time">{(new Date()).toLocaleString()}
          </div>
        </div>
      </React.Fragment>
    );
  };
};