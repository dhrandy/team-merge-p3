import React from 'react';
import axios from 'axios';
import AccountFiller from './Account.js';
import drugs from '../../prescription.json'
import Wrapper from '../Wrapper/Wrapper'
import Account from '../../components/Account/Account'

export default class AccountContainer extends React.Component {
    state = {
        drugs
    }

    render() {
        return (
            <React.Fragment>
                {this.state.drugs.map((drug, index) =>
                    <div key={index}>
                        <Account
                            prescription={drug.drugs}
                            Medication_Conflict={drug.Medication_Conflict}
                            Food_Restrictions={drug.Food_Restrictions}
                            Medicated={drug.Medicated}
                        />
                    </div>
                )}
            </React.Fragment>
        )
    }
}