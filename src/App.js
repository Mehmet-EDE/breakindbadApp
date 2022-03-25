import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:charId" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
