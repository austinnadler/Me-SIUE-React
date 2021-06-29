import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const header = () => {
    return (
        <Navbar bg="primary" variant="dark"> {/* expand="md" */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto">
                    <LinkContainer to="/home">
                        <Nav.Link><i className="fa fa-home"></i>&nbsp;Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link><i className="fa fa-hammer"></i>&nbsp;Projects</Nav.Link>
                    </LinkContainer>
                </Nav>
            {/* </Navbar.Collapse> */}
        </Navbar>
    )
}

export default header;