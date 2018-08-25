import React, { Component } from 'react';
import Activity from './Activity'
import './Activity.css';


class ActivityComponent extends Component {

    render() {

        console.log("Michelle", this.props)

        return (

            <div>
                <h1 id='ar' >Activity Restrictions</h1>
                {this.props.userState.userData.prescriptions.map((drug, index) => {
                    return (<Activity key={index}
                        drugName={drug.name}
                        activityRestrictions={drug.activityRestrictions}
                    />)
                })}

            </div>
        )
    }

};

export default ActivityComponent