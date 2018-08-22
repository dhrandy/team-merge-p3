import React from 'react'
import './Account.css'

const Account = props => (
    <tr>
        <td>{props.prescription}</td>
        <td>{props.medicationConflict}<i className="fas fa-tablets fa-md "></i></td>
        <td>{props.foodRestrictions}<i className="fas fa-apple-alt fa-2x"></i></td>
        <td>{props.activityRestrictions}<i className="fas fa-people-carry fa-2x "></i></td>
        <td>{props.Medicated}</td>
    </tr>

);

export default Account