import React, { Component } from 'react';
import StyledTeam from './styled_components/StyledTeam'

export default class Team extends Component {
    render() {
        return (
            <StyledTeam>
                <h3>EQUIPO</h3>
                <div className="content-wrap">
                <div className="secondary-wrap"></div>
                    <p>
                        Todos los que forman Greenvio poseen certificados PRL (Proteccion de riesgos laborales) y seguro de accidente.
                    </p>
                    <p>
                        Los envios se entregan en vehiculos de cero o bajas emisiones, bicicletas, motos y furgonetas.
                    </p>
                    <p>
                        Ofrecemos seguro de paqueteria a todos los repartos.
                    </p>
                    <p>
                        Si no queda satisfecho con el servicio, le devolvemos su dinero.
                    </p>
                </div>
            </StyledTeam>
        )
    }
}
