import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

const Account = props => (
    <tr>
        <td>{props.prescription}</td>
        <td><Link to='../MedPage'><i className={props.medicationConflict ? "fas fa-tablets fa-2x" : ""}></i></Link></td>
        <td><Link to='/FoodPage'><i className={props.foodRestrictions ? "fas fa-apple-alt fa-2x" : ""}></i></Link></td>
        <td><Link to='ActivityPage'><i className={props.activityRestrictions ? "fas fa-people-carry fa-2x" : ""}></i></Link></td>
        <td aid={props.id} onClick={() => props.removePrescription(props.id)}><i className="fas fa-trash-alt fa-2x"></i></td>
    </tr>
);

export default Account