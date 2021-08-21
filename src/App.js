import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
