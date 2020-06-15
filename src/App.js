import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactAllergie from './pages/contact-allergie';
import Vlooien from './pages/vlooien';
import StekendeInsecten from './pages/stekende-insecten';
import Schimmel from './pages/schimmel';
import Oormijt from './pages/oormijt';
import Huidmijt from './pages/huidmijt';
import Gisten from './pages/gisten';
import GeenUitkomst from './pages/geen-duidelijkheid';
import Vraag1 from './components/vraag1';
import Vraag2 from './components/vraag2';
import Vraag3 from './components/vraag3';
import Vraag4 from './components/vraag4';
import Vraag5 from './components/vraag5';
import Vraag6 from './components/vraag6';
import Vraag7 from './components/vraag7';
import StartScreen from "./components/startScreen";


function App() {
  return (
    <div className="App">
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
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
