import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            </div>
        )
    }
}
