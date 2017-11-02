import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './Home';
import Submit from './Submit';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home} />
      <Route path="/submit" component={Submit}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
