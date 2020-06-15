import React, { Component } from 'react'
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag7 extends Component {
    render() {
        return (
            <div className="symptoomcheck-div">
                <h2>Mijn hond is jonger dan 6 maanden.</h2>
                <div className="antwoord-div">
                    <Link to="/huidmijt" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja</p>
                        </div>
                    </Link>
                    <Link to="/geen-uitkomst" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Nee</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}