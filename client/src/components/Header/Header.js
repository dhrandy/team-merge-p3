import React, {Component} from 'react';
import Clock from 'react-live-clock';
import './header.css'

export default class Header extends Component {
  render() {
    // function tick() {
    //   let time = (Date().toLocaleTimeString());
    //   time.setInterval(tick, 1000);
    // }
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'} />
    return (
      <React.Fragment>
        <div className='jumbotron'>
          <div className= "time"><time></time>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

// (new Date()).toLocaleString()