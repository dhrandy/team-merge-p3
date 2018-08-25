import React from 'react'

const Med = props => (
    <div>
        <h1> {props.drugName} </h1>
        {props.medicationRestrictions.map((a, index) => {
            return (<p key={`a${index}`}> {a.description} </p>)
        })}
    </div>
)

export default Med