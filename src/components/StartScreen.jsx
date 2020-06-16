import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Symptoomcheck.css';

export default class startScreen extends Component {
    render() {
        return (
            <div id='startScreen' className="start-screen">
                <h2>Waarom heeft mijn hond jeuk?</h2>
                <h3>Test het hier:</h3>
                <Link to="/vraag1" className="start-knop-link">
                    <div className='start-knop'>
                        <p>Start</p>
                    </div>
                </Link>
                <div className="disclaimer">
                    <p>
                        <strong>Let op:</strong> Iedere hond is anders waardoor symptomen per dier verschillend tot uiting kunnen komen. De symptomen binnen deze tool zijn gebaseerd op hoe de symptomen in de meerderheid van de gevallen tot uiting komt. Twijfel je over de symptomen neem dan altijd even contact op met uw dierenarts.
                    </p>
                </div>
            </div>
        )
    }
}
