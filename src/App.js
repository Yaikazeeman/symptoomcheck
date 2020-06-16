import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactAllergie from './pages/ContactAllergie';
import Vlooien from './pages/Vlooien';
import StekendeInsecten from './pages/StekendeInsecten';
import Schimmel from './pages/Schimmel';
import Oormijt from './pages/Oormijt';
import Huidmijt from './pages/Huidmijt';
import Gisten from './pages/Gisten';
import GeenUitkomst from './pages/GeenDuidelijkheid';
import Vraag1 from './components/Vraag1';
import Vraag2 from './components/Vraag2';
import Vraag3 from './components/Vraag3';
import Vraag4 from './components/Vraag4';
import Vraag5 from './components/Vraag5';
import Vraag6 from './components/Vraag6';
import Vraag7 from './components/Vraag7';
import StartScreen from "./components/StartScreen";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content-div">
      <header className="App-header">
        <div className="Header-top-line">
           <h1>Symptoomcheck</h1>
        </div>
      </header>
      <Router>
        <Switch> 
        <Route path="/" exact component={StartScreen} />
        <Route path="/vraag1" component={Vraag1}/>
        <Route path="/vraag2" component={Vraag2}/>
        <Route path="/vraag3" component={Vraag3}/>
        <Route path="/vraag4" component={Vraag4}/>
        <Route path="/vraag5" component={Vraag5}/>
        <Route path="/vraag6" component={Vraag6}/>
        <Route path="/vraag7" component={Vraag7}/>
        <Route path="/contact-allergie" component={ContactAllergie} />
        <Route path="/geen-uitkomst" component={GeenUitkomst} />
        <Route path="/gisten" component={Gisten} />
        <Route path="/huidmijt" component={Huidmijt} />
        <Route path="/oormijt" component={Oormijt} />
        <Route path="/schimmel" component={Schimmel} />
        <Route path="/stekende-insecten" component={StekendeInsecten} />
        <Route path="/vlooien" component={Vlooien} />
        </Switch>
      </Router>
      </div>
      <footer className="footer">
        <p>Copyright @ 2020  Yaika Zeeman</p>
      </footer>
    </div>
  );
}

export default App;
