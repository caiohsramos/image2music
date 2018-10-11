import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import Nav from 'react-bootstrap/lib/Nav'

export default props => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#/">Image2Music</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#/load-image">
                    Get Started
                </NavItem>
                <NavItem eventKey={2} href="#/about">
                    About
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)