import React, {Component} from 'react'
import axios from "axios";
import './DrugBank.css'

class DrugBankMedInteractions extends Component {
    state = {
        userMessage: "Searching Drug Bank database...",
        dbQueryComplete: false,
        foundData: false,
        checked: false,
        medInteractions: []
    }

    componentDidMount = () => {
        axios.get(`/api/medications/getDrugInteractions/${this.props.pName}`)
            .then( res => {
                let userMessage = "Drug Bank search complete"
                console.log('Search Results - ',res.data)
                if( res.data.length > 0 ) {
                    let medInteractions = []
                    if ( res.data.length > 10 ) {
                        userMessage = "Drug Bank search found more than 10 interactions"
                        medInteractions = res.data.splice(0,10) 
                    }
                    else {
                        medInteractions = res.data
                    }
                    for (let i=0; i<medInteractions.length; i++) {
                        medInteractions[i].checked = false
                    }
                    this.setState({
                        userMessage,
                        dbQueryComplete: true,
                        foundData: true,
                        medInteractions
                    })
                 }
                 else {
                   userMessage = "Drug Bank search complete.  No results found"
                   this.setState({dbQueryComplete: true})
                 }
            })
    }

    handleCheckBoxChange = (e) => {
        let medInteractions = this.state.medInteractions
        let i = medInteractions.map( m => m._id).indexOf([e.target.name][0])
        medInteractions[i].checked = e.target.checked
        this.setState({medInteractions})
        this.props.updateFromDrugBank(medInteractions)
    }

    render() {
        if (this.state.dbQueryComplete) {
            return(
                <div className='container'>
                    <div className='row'>
                        <h1>{this.state.userMessage}</h1>
                    </div>
    
                    <div className='row'>
                        <div className='col-md table-scroll'>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Include</th>
                                        <th scope='col'>Description of Interaction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.medInteractions.map( (m, index) => {
                                        return( 
                                          <tr key={`t${index}`}>
                                              <td key={`c${index}`}>
                                                  <input key={`i${index}`} type="checkbox" name={m._id} onChange={this.handleCheckBoxChange}/>
                                              </td>
                                              <td key={`m${index}`}>{m.description}</td>
                                          </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <h1>{this.state.userMessage}</h1>
                </div>
            )
        }
    }
}

export default DrugBankMedInteractions