import React from 'react'
import MainImg from './MainImg';
import Bio from './Bio';
import ContactForm from'./ContactForm';
import ControlledCarousel from './Carousel'

export default class HomeContainer extends React.Component {
	render(){
		return(
		<div className="App">
 	      	 <MainImg />
  	      	 <Bio />
  	      	 <ControlledCarousel />
	    </div>
		)
	}
}

