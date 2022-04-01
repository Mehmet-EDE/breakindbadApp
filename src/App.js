import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Quotes from './pages/Quotes'
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link className="App-link" to='/'>Characters</Link>
            </li>
            <li>
              <Link className="App-link" to='/Quotes'>Quotes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:charId" component={Detail} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/quotes/:quote_id" component={QuoteDetail} />
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
