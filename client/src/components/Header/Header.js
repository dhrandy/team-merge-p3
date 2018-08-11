import React, {Component} from 'react';
import './header.css'

export default class Header extends Component {
  render() {
    function tick() {
      let time = (Date().toLocaleTimeString());
      time.setInterval(tick, 1000);
    }
    return (
      <React.Fragment>
        <div className='jumbotron'>
          <div className= "time">{tick}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// (new Date()).toLocaleString()