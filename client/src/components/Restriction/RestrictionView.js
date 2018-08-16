import React from 'react';

const RestrictionView = (props) => {

  return (
      <div className="restriction-view">
        <p key={props.name.trim()}>=={props.name}</p>
        {props.restriction.map( (r) => (
          <p key={`r${r._id}`}>===={r.description}</p>
        ))}
      </div>
  )
}

export default RestrictionView