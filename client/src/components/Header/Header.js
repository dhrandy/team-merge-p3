import React, {Component} from 'react';
import Clock from 'react-live-clock';
import './header.css'

export default class Header extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount = () => {
    this.intervalID = setInterval( () => this.tick(), 1000 )
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalID)
  }

  tick = () => {
    this.setState( {time: new Date().toLocaleTimeString()})
  }

  render() {
    return (
      <React.Fragment>
        <div className='jumbotron'>
          <div className= "time">{this.state.time}
          </div>
        </div>
      </React.Fragment>
    );
  }
}