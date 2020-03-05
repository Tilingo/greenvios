import React, { Component } from 'react';
import StyledHomePage from './styled_components/StyledHomePage';
import HomeLogo from './HomeLogo';
import WhoWeAre from './WhoWeAre';
import Mission from './Mission';
import OurServices from './OurServices';
import Team from './Team';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class HomePage extends Component {
    render() {
        return (<div>
            <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#somos">Somos</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">Greenvios</Navbar.Brand>
            </Navbar>
            <StyledHomePage>
                <HomeLogo></HomeLogo>
                <WhoWeAre id="somos"></WhoWeAre>
                <Mission></Mission>
                <OurServices></OurServices>
                <Team></Team>
            </StyledHomePage>
        </div>
        );
    }
}

export default HomePage;