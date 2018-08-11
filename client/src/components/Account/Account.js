import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Account.css'

class Main extends Component {
    render() {
        return (

            <div className='container'>

                <div className='row'>
                    <div className='col-md'>
                        <h2>
                            Dont forget to take
                        </h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md'>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Prescription</th>
                                    <th scope="col">Medication Conflict</th>
                                    <th scope="col">Food Restrictions</th>
                                    <th scope="col">Activity Restrictions</th>
                                    <th scope="col">Medicated </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>




            </div>
        );
    };
};

export default Main