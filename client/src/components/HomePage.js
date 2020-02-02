import React, { Component } from 'react';
import logo from '../images/logo.png'
import StyledHomePage from './styled_components/HomePage'

class HomePage extends Component {
    render() {
        return (
            <StyledHomePage>
                <div className="logo-wrap">
                    <img src={logo} alt="logo" />
                </div>
            </StyledHomePage>
        );
    }
}

export default HomePage;