import React, { Component } from 'react';
import Food from './Food'
import './Food.css';


class FoodComponent extends Component {

  render() {

    return (

      <div className='container'>
        <h1 id='fr'> Food Restrictions </h1>
        {this.props.userState.userData.prescriptions.map((drug, index) => {
          return (<Food key={index}
            drugName={drug.name}
            foodRestrictions={drug.foodRestrictions}
          />)
        })}

      </div>
    )
  }

};

export default FoodComponent