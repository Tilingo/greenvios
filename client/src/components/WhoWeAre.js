import React, { Component } from 'react';
import StyledWhoWeAre from './styled_components/StyledWhoWeAre';
import madrid from '../images/madrid-noche.jpg'

class WhoWeAre extends Component {
    render() {
        return (
            <StyledWhoWeAre id="somos">
                <div className="somos-text">
                    <h1>SOMOS</h1>
                    <h3>UN SERVICIO DE PAQUETERIA RESPONSABLE.</h3>
                    <p>Formado por profesionales comprometidos con ofrecer un beneficio inigualable y eficaz a nuestros clientes, cuidando del entorno.</p>
                </div>
                <div className="madrid-noche">
                    <img src={madrid} alt="madrid de noche" />
                </div>
            </StyledWhoWeAre>
        );
    }
}

export default WhoWeAre;