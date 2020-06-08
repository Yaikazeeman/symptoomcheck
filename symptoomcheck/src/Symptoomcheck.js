import React from 'react';
import './Symptoomcheck.css';
import StartScreen from "./components/startScreen";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Vraag1 from './components/vraag1';
import Vraag2 from './components/vraag2';
import Vraag3 from './components/vraag3';
import Vraag4 from './components/vraag4';
import Vraag5 from './components/vraag5';
import Vraag6 from './components/vraag6';
import Vraag7 from './components/vraag7';

function Symptoomcheck() {

    return(
        <div className="symptoomcheck-container">
            <div className="symptoomcheck-div">   
                <Router>
                    <Route path="/" exact component={StartScreen} />
                    <Route path="/vraag1" component={Vraag1}/>
                    <Route path="/vraag2" component={Vraag2}/>
                    <Route path="/vraag3" component={Vraag3}/>
                    <Route path="/vraag4" component={Vraag4}/>
                    <Route path="/vraag5" component={Vraag5}/>
                    <Route path="/vraag6" component={Vraag6}/>
                    <Route path="/vraag7" component={Vraag7}/>
                </Router>
            </div>
        </div>
    );
}

export default Symptoomcheck;