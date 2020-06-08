import React, { Component } from 'react'
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag1 extends Component {
    render() {
        return (
            <div>
                <h2>Mijn hond heeft duidelijk jeuk op 1 kleine, specifieke plaats op het lichaam.</h2>
                <div className="antwoord-div">
                    <Link to="/stekende-insecten" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja</p>
                        </div>
                    </Link>
                    <Link to="/oormijt" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja, namelijk de oren</p>
                        </div>
                    </Link>
                    <Link to="/vraag2" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Nee</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
