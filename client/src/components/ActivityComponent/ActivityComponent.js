import React, { Component } from 'react';
import './Activity.css';


class ActivityComponent extends Component {

    render() {

        console.log("Michelle", this.props)

        return (

            <div>

                {this.props.userState.userData.prescriptions.map((drug, index) => {

                    drug.activityRestrictions.map(a => {
                        return (<h3>{a} </h3>)
                    })
                    return (<h3>{drug.name}</h3>)
                })}

            </div>
        )
    }

};

export default ActivityComponent


// *return (<ActivityComponent key={index}
//                         foodRestrictions={drug.foodRestrictions.length}
//                     />)
// <h1>{drug.name}</h1>
