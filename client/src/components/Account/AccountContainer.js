import React from 'react';
import axios from 'axios';
import Account from './Account';
//import drugs from '../../prescription.json'
import Wrapper from '../Wrapper/Wrapper'

const AccountContainer = (props) => {
    const userData = props.userData
    console.log('DEBUG - AccountContainer - userData', userData)
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-md'>
                    <h2> Dont forget to take </h2>
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
                            {userData.prescriptions.map((drug, index) =>
                                <Account  key={index}
                                    prescription={drug.name}
                                    medicationConflict={drug.medicationRestrictions.length}
                                    foodRestrictions={drug.foodRestrictions.length}
                                    activityRestrictions={drug.activityRestrictions.length}
                                    Medicated={userData.name}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AccountContainer