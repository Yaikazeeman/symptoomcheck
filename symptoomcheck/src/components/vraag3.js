import React, { Component } from 'react';
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag3 extends Component {
    render() {
        return (
            <div className="symptoomcheck-div">
                <h2>Ik heb de vacht van mijn dier gecontroleerd met een vlooienkam en ik kan geen vlooien of vlooienpoepjes vinden.</h2>
                <div className="antwoord-div">
                    <Link to="/vraag4" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja</p>
                        </div>
                    </Link>
                    <Link to="/vlooien" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Nee</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
