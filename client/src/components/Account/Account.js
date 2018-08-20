import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Account.css'
import drugs from '../../prescription.json'

const Account = props => (
    <tr>
        <td>{props.prescription}</td>
        <td>{props.medicationConflict}</td>
        <td>{props.foodRestrictions}</td>
        <td>{props.activityRestrictions}</td>
        <td>{props.Medicated}</td>
    </tr>
);

export default Account