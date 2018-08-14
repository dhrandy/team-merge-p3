import React, { Component } from 'react'
import './counter.css'


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state= {
      clicks: 0,
      show:true
    };
  }

  increment = () => { 
    this.setState({ clicks: this.state.clicks +1});
  }

  decrement = () => { 
    this.setState({clicks: this.state.clicks -1});
  }  

  toggleClick = () => {
    this.setState({ show: !this.state.show});
  }
  

  render () {
    return (
  <div className="container">
    <div className="row input-group">

      <div className='col-md'>
        <span className="input-group-btn">
          <button onClick={this.increment} type="button" className="btn btn-secondary btn-number" data-type="minus" data-field="">
          +
          </button>
        </span>
      </div>

      <div className='col-md'>
          { this.state.show ? <span id="number">{ this.state.clicks }</span> : '' }
      {/* <input type="text" id="quantity" name="quantity" size="2" value="1" min="1" max="100"  /> */}
      </div>
      
      <div className='col-md'>
      <span className="input-group-btn">
        <button onClick={this.decrement} type="button" className= "btn btn-secondary btn-number" data-type="plus" data-field="">
        -
        </button>
      </span>
      </div>

    </div>
  </div>
  )
  }

}

export default Counter