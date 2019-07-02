import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import App from './App';
import Portfolio from './Portfolio'
import Resume from './Resume'
import NavbarComp from './Navbar';



import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	(<Router>
	  <NavbarComp />
      <Route exact={true} path="/home" component={ App } />
      <Route path="/resume" component={ Resume } />
      <Route path="/portfolio" component={ Portfolio } />
 	</Router>), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
