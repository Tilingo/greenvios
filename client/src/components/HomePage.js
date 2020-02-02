import React, { Component } from 'react';
import logo from '../images/logo.png'
import StyledHomePage from './styled_components/HomePage'

class HomePage extends Component {
    render() {
        return (
            <StyledHomePage>

                <img src={logo} alt="logo" />
            </StyledHomePage>
        );
    }
}

export default HomePage;