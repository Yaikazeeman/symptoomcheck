import React, { Component } from 'react'
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag6 extends Component {
    render() {
        return (
            <div className="symptoomcheck-div">
                <h2>Mijn hond is ouder dan 1 jaar.</h2>
                <div className="antwoord-div">
                    <Link to="/gisten" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja</p>
                        </div>
                    </Link>
                    <Link to="/vraag7" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Nee</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}