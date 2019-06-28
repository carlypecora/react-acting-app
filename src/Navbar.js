import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'


export default class NavbarComp extends React.Component {
	render() {
		return(
			<div className="nav-div">
				<Navbar.Brand>Carly Ann </Navbar.Brand>
				  <Nav className="justify-content-end" activeKey="/home">
				    <Nav.Item>
				      <Nav.Link href="/home">Resume</Nav.Link>
				    </Nav.Item>
				    <Nav.Item>
				      <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
				    </Nav.Item>
				    <Nav.Item>
				      <Nav.Link eventKey="link-2">Contact</Nav.Link>
				    </Nav.Item>
				  </Nav>
			</div>
		)
	}
}