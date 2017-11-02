import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Home from './Home';
import Submit from './Submit';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="">Love to Eat</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="activeNav" to="/home">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="activeNav" to="/submit">Submit A Recipie</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/home" component={Home}/>
        <Route path="/submit" component={Submit} history={history}/>
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
