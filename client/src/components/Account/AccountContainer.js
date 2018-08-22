import React, { Component } from 'react'
import Account from './Account'

import moment from 'moment'

class AccountContainer extends Component {
    state = { 
        headerMessage: "List of all your Prescriptions",
        checking: false,
        nextTime: ""
    }

    componentDidMount = () => {
        if(!this.props.allMedications) {
            this.intervalID = setInterval( () => this.checkForNextTime(), 60000) 
            //
            // Had to add this delay after adding sessionStorage
            //
            if(!this.state.checking) setTimeout( () => {this.checkForNextTime()}, 1000);
        } 
    }

    componentWillUnmount = () => {
        if(!this.props.allMedications) clearInterval(this.intervalID)
    }

    medTime = (drug) => {
        let matchesNextMedTime = false
        drug.dosageDays.map( (d) => {
            drug.dosageTime.map( (t) => {
                let checkTime = `${d.day} ${t.time}`
                if ( checkTime === this.state.nextTime ) matchesNextMedTime = true
            })
        })

        return matchesNextMedTime
    }

    checkForNextTime = () => {
        
        let foundOne = false
        let cTime = moment();
        let nextMedTime = moment(cTime).add(8,'day');
        this.props.userData.prescriptions.map( (drug) => {
            drug.dosageDays.map( (d) => {
                let dDay = moment().isoWeekday(d.day).startOf('day')
                drug.dosageTime.map( (t) => {
                  let tTime = moment(t.time, "HH:mm")
                  let minutes = (tTime.hour()*60) + tTime.minute()
                  let pTime = moment(dDay)
                  let validTime = moment(nextMedTime)
                  pTime.add(minutes,'minutes')
                  if ( pTime >= cTime ) validTime = moment(pTime)
                  if ( validTime <= nextMedTime ) {
                      foundOne = true
                      nextMedTime = moment(validTime)
                  }
                })
            })
        })
        if ( foundOne ) {
            this.setState({
                headerMessage: `On ${nextMedTime.format('MMM DD (ddd)')} at ${nextMedTime.format('HH:mm')} don't forget to take:`,
                checking: true,
                nextTime: `${nextMedTime.format('ddd')} ${nextMedTime.format('HH:mm')}`
            })
        }
        else {
            this.setState({
                headerMessage: `No prescriptions scheduled at this time`,
                checking: true,
                nextTime: nextMedTime
            })
        }
    }

    render() {
        const userData = this.props.userData
        const allMedications = this.props.allMedications

        return (
            <div className='container'>
    
                <div className='row'>
                    <div className='col-md'>
                        <h2> {this.state.headerMessage} </h2>
                    </div>
                </div>
    
                <div className='row'>
                    <div className='col-md'>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Prescription</th>
                                    <th scope="col">Medication Conflict</th>
                                    <th scope="col">Food Restrictions</th>
                                    <th scope="col">Activity Restrictions</th>
                                    <th scope="col">Medicated </th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.prescriptions.map((drug, index) => {
                                    if (allMedications || this.medTime(drug)) {
                                        return (<Account  key={index}
                                            prescription={drug.name}
                                            medicationConflict={drug.medicationRestrictions.length}
                                            foodRestrictions={drug.foodRestrictions.length}
                                            activityRestrictions={drug.activityRestrictions.length}
                                            Medicated={userData.name}
                                        />)
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountContainer