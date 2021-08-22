import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Therapists from './Pages/Therapists';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route path="/Therapists">
            <Therapists />
          </Route>

          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
