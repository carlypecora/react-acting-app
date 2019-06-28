import React from 'react'
import NavbarComp from './Navbar';
import MainImg from './MainImg';
import Bio from './Bio';
import ContactForm from'./ContactForm';
import Footer from './Footer';

export default class HomeContainer extends React.Component {
	render(){
		return(
		<div className="App">
			 <NavbarComp />
 	      	 <MainImg />
  	      	 <Bio />
 	      	 <ContactForm />
  	      	 <Footer />
	    </div>
		)
	}
}

