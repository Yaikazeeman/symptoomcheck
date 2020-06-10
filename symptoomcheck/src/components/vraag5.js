import React, { Component } from 'react'
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag5 extends Component {
    render() {
        return (
            <div className="symptoomcheck-div">
                <h2>Mijn hond heeft alleen jeuk en een rode huid op de buik, tussen de liezen en onder de poten?</h2>
                <div className="antwoord-div">
                    <Link to="/contact-allergie" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja</p>
                        </div>
                    </Link>
                    <Link to="/vraag6" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Nee</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}