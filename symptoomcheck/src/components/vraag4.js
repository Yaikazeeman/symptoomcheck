import React, { Component } from 'react'
import "../Symptoomcheck.css";
import {Link} from "react-router-dom";

export default class vraag4 extends Component {
    render() {
        return (
            <div>
                <h2>Mijn hond heeft duidelijke kale plekken in zijn vacht maar lijkt eigenlijk maar weinig jeuk te hebben.</h2>
                <div className="antwoord-div">
                    <Link to="/schimmel" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Ja</p>
                        </div>
                    </Link>
                    <Link to="/vraag5" className="antwoord-knop">
                        <div className='start-knop'>
                            <p>Nee</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
