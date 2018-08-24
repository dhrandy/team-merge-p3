import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import DrugBankMedInteraction from '../../DrugBank/DrugBankMedInteraction'
import './medication.css'
import axios from 'axios';

class Medication extends Component {

  state = {
    medRestriction1: "",
    medRestriction2: "",
    medRestriction3: "",
    drugBankRestrictions: [],
    redirect: false
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onClick = (e) => {
    e.preventDefault()
        let email = this.props.email
        let token = this.props.token
        let medicationRestrictions = this.state.drugBankRestrictions
        if (this.state.medRestriction1 !== "") medicationRestrictions.push({description: this.state.medRestriction1})
        if (this.state.medRestriction2 !== "") medicationRestrictions.push({description: this.state.medRestriction2})
        if (this.state.medRestriction3 !== "") medicationRestrictions.push({description: this.state.medRestriction3})
        axios.put("/api/prescriptions/updatePrescription/"+this.props.pid._id, {medicationRestrictions: medicationRestrictions})
        .then(res => {
             this.props.action({email, token}) 
             this.setState({redirect: true})
        })
  }

  updateFromDrugBank = (medInteractions) => {
    let tempDescriptions = []

    for(let i=0; i<medInteractions.length; i++) {
        if(medInteractions[i].checked) tempDescriptions.push({description: medInteractions[i].description})
    }
    this.setState({drugBankRestrictions: tempDescriptions})

  }

  render () {
		if (this.state.redirect) return(<Redirect push to='/medication' />)
    return (
      <div id="medicationpage">
        <h1> Medication Restriction </h1>
        <h4> Please enter any medication restriction associated with the medication</h4>
          <br/>
        <input type="text" aria-describedby="" placeholder="Medication Restriction" name="medRestriction1" value={this.state.medRestriction1} onChange={this.onChange} />
          <br/> <br/>
        <input type="text" aria-describedby="" placeholder="Medication Restriction" name="medRestriction2" value={this.state.medRestriction2} onChange={this.onChange} />
          <br/> <br/>
        <input type="text" aria-describedby="" placeholder="Medication Restriction" name="medRestriction3" value={this.state.medRestriction3} onChange={this.onChange} />
          <br/> <br/>
        <button onClick={this.onClick} type="submit" className="btn btn-secondary">Submit</button> 
        <DrugBankMedInteraction pName={this.props.pName} updateFromDrugBank={this.updateFromDrugBank}/>
      </div>
    )
  }
}


export default Medication

