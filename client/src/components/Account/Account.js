import React, { Component } from 'react'
import './Account.css'

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