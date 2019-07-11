import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Portfolio from './Portfolio'
import Resume from './Resume'
// import { Mailto } from 'react-mailto'

import { Navbar, Nav } from 'react-bootstrap'


export default class NavbarComp extends React.Component {
	state = {
		numTimesClicked: 0
	}

	handleClick = () => {
		this.setState({ numTimesClicked: this.state.numTimesClicked + 1})
	}

	render() {
		return(
				<div className="nav-div">
					<Link to="/" onClick={this.handleClick}><Navbar.Brand>Carly Ann </Navbar.Brand></Link>
					  <Nav className="justify-content-end" activeKey="/home">
					    <Nav.Item>
					      <NavLink className="nav-link" to="/resume">Resume</NavLink>
					    </Nav.Item>
					    <Nav.Item>
					      <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
					    </Nav.Item>
					    <Nav.Item>
					      <Nav.Link href="mailto:carly@carlypecora.com" eventKey="link-2">Contact</Nav.Link>
					    </Nav.Item>
					  </Nav>
				</div>
		)
	}
}



//<Mailto email="carlyannpecora@gmail.com" obfuscate={true}></Mailto>