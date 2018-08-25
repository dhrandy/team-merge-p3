import React, { Component } from 'react';
import Med from './Med'
import './Med.css';


class MedComponent extends Component {

  render() {

    return (

      <div className='container'>
        <h1 id='mr' >Medication Restrictions</h1>
        {this.props.userState.userData.prescriptions.map((drug, index) => {
          return (<Med key={index}
            drugName={drug.name}
            medicationRestrictions={drug.medicationRestrictions}
          />)
        })}

      </div>
    )
  }

};

export default MedComponent