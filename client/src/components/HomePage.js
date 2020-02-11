import React, { Component } from 'react';
import StyledHomePage from './styled_components/StyledHomePage';
import HomeLogo from './HomeLogo';
import WhoWeAre from './WhoWeAre';

class HomePage extends Component {
    render() {
        return (
            <StyledHomePage>
                <HomeLogo></HomeLogo>
                <WhoWeAre></WhoWeAre>
            </StyledHomePage>
        );
    }
}

export default HomePage;