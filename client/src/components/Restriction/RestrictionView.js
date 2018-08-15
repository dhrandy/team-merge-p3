import React from 'react';

const RestrictionView = (props) => {

  return (
      <div className="restriction-view">
        <p>=={props.name}</p>
        {props.restriction.map( (r) => (
          <p key={r._id}>===={r.description}</p>
        ))}
      </div>
  )
}

export default RestrictionView