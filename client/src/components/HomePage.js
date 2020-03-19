import React, { Component } from 'react';
import StyledHomePage from './styled_components/StyledHomePage';
import HomeLogo from './HomeLogo';
import WhoWeAre from './WhoWeAre';
import Mission from './Mission';
import OurServices from './OurServices';
import Team from './Team';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class HomePage extends Component {
    render() {
        return (<div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home" className="home-button">Greenvios</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#somos">Somos</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <StyledHomePage>
                <HomeLogo></HomeLogo>
                <WhoWeAre id="somos"></WhoWeAre>
                <OurServices></OurServices>
                <Mission></Mission>
                <Team></Team>
            </StyledHomePage>
        </div>
        );
    }
}

export default HomePage;