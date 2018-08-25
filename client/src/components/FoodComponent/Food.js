import React from 'react'

const Food = props => (
    <div>
        <h1> {props.drugName} </h1>
        {props.foodRestrictions.map((a, index) => {
            return (<p key={`a${index}`}> {a.description} </p>)
        })}
    </div>
)

export default Food