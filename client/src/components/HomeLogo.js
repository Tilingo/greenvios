import React, { Component } from 'react';
import StyledHomeLogo from './styled_components/StyledHomeLogo';
import logo from '../images/logo.png';

class HomeLogo extends Component {
    render() {
        return (
            <StyledHomeLogo id="home">
                <img src={logo} alt="logo" />
            </StyledHomeLogo>
        );
    }
}

export default HomeLogo;