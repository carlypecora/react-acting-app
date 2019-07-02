import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Portfolio from './Portfolio'
import Resume from './Resume'

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
			<Router>
				<div className="nav-div">
					<Link to="/home" onClick={this.handleClick}><Navbar.Brand>Carly Ann </Navbar.Brand></Link>
					  <Nav className="justify-content-end" activeKey="/home">
					    <Nav.Item>
					      <Link to="/resume" onClick={this.handleClick}>Resume</Link>
					    </Nav.Item>
					    <Nav.Item>
					      <Link to="/portfolio" onClick={this.handleClick}>Portfolio</Link>
					    </Nav.Item>
					    <Nav.Item>
					      <Nav.Link eventKey="link-2">Contact</Nav.Link>
					    </Nav.Item>
					  </Nav>
				</div>
				
			</Router>
		)
	}
}