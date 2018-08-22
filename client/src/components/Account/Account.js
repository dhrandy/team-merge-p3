import React from 'react'
import './Account.css'

const Account = props => (
    <tr>
        <td>{props.prescription}</td>
        <td><i className={props.medicationConflict ? "fas fa-tablets fa-md" : ""}></i></td>
        <td><i className={props.foodRestrictions ? "fas fa-apple-alt fa-2x" : ""}></i></td>
        <td><i className={props.activityRestrictions ? "fas fa-people-carry fa-2x" : ""}></i></td>
        <td><i className="fas fa-trash-alt fa-2x"></i></td>
    </tr>

);

export default Account