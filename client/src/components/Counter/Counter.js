import React, { Component } from 'react'
import './counter.css'


class Counter extends Component {
  state= {count:0}

  increment = e => this.setState ({ 
    count: this.state.count +1
  })

  decrement = e =>
  this.setState({ count: this.state.count -1})
  

  render = () =>
  <div>
    <div className="input-group">
      <span className="input-group-btn">
        <button onClick={this.increment} type="button" className="btn btn-secondary btn-number" data-type="minus" data-field="">
        +
        </button>
      </span>

      <input type="text" id="quantity" name="quantity" size="2" value="1" min="1" max="100" />

      <span className="input-group-btn">
        <button onClick={this.decrement} type="button" className= "btn btn-secondary btn-number" data-type="plus" data-field="">
        -
        </button>
      </span>
    </div>
  </div>
}

export default Counter