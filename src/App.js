import React from 'react';
import logo from './logo.svg';
import './App.css';  
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  HomeContainer from './HomeContainer'
import Portfolio from './Portfolio'
import Resume from './Resume'
import NavbarComp from './Navbar';
import Footer from './Footer';





class App extends React.Component {
  render(){
    return (
    	<Router>
		  <NavbarComp />
	      <Route exact={true} path="/" component={ HomeContainer } />
	      <Route path="/resume" component={ Resume } />
	      <Route path="/portfolio" component={ Portfolio } />
        <Footer />

	 	</Router>

    );
  }
}


export default App;
  // <Route path="/cars" component={Car}/>
  // <Route path="/about" component={About}/>
