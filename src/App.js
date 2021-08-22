import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Therapists from './Pages/Therapists';
import CarmenLo from './Components/CarmenLo';
import BrittanyLynch from './Components/BrittanyLynch';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route path="/Therapists/CarmenLo">
            <CarmenLo />
          </Route>

          <Route path="/Therapists/BrittanyLynch">
            <BrittanyLynch />
          </Route>

          <Route path="/Therapists">
            <Therapists />
          </Route>

          <Route path="/Home">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
