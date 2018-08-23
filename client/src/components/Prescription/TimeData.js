import React from 'react'

const TimeData = props => (
    <div>
        <input type="name" id={props.name} aria-describedby="" placeholder={props.value} name={props.name} size="10" value={props.value} onChange={props.onChange} />
    </div>
)

export default TimeData