import React from 'react'

const Activity = props => (
    <div>
        <h1> {props.drugName} </h1>
        {props.activityRestrictions.map( (a, index) => {
            return( <p key={`a${index}`}> {a.description} </p>)
        })}
    </div>
)

export default Activity