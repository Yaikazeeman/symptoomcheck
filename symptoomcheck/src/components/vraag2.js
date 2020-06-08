import React, { Component } from 'react'
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag2 extends Component {
    render() {
        return (
            <div>
                <h2>Ik behandel alle honden en katten in het huis maandelijks met anti-vlooienmiddelen.</h2>
                <div className="antwoord-div">
                    <Link to="/vraag3" className="antwoord-knop">
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
