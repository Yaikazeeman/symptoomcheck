import React from 'react';
import './App.css';
import Symptoomcheck from './Symptoomcheck.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactAllergie from './pages/contact-allergie';
import Vlooien from './pages/vlooien';
import StekendeInsecten from './pages/stekende-insecten';
import Schimmel from './pages/schimmel';
import Oormijt from './pages/oormijt';
import Huidmijt from './pages/huidmijt';
import Gisten from './pages/gisten';
import GeenUitkomst from './pages/geen-duidelijkheid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-top-line">
          <h1>Symptoomcheck</h1>
        </div>
      </header>
      <Router>
        <Route path="/" exact component={Symptoomcheck} />
        <Route path="/contact-allergie" component={ContactAllergie} />
        <Route path="/geen-uitkomst" component={GeenUitkomst} />
        <Route path="/gisten" component={Gisten} />
        <Route path="/huidmijt" component={Huidmijt} />
        <Route path="/oormijt" component={Oormijt} />
        <Route path="/schimmel" component={Schimmel} />
        <Route path="/stekende-insecten" component={StekendeInsecten} />
        <Route path="/vlooien" component={Vlooien} />
      </Router>
    </div>
  );
}

export default App;
