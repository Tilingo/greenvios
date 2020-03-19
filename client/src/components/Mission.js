import React, { Component } from 'react'
import StyledMission from './styled_components/StyledMission'

export default class Mission extends Component {
    render() {
        return (
            <StyledMission>
                <div className="mission">
                    <h3>MISIÓN</h3>
                    <p>Ofrecerte el mejor servicio al transportar tu sobre, paquete o regalo, dando verdadera importancia a cada uno de ellos.</p>
                </div>
                <div className="horarios">
                    <h3>HORARIOS</h3>
                    <p>LUNES - SABADO / 8 - 22hrs</p>
                    <p>DOMINGO / 2 - 22hrs</p>
                    <p>(Acceso homologado a Madrid Central)</p>
                </div>
            </StyledMission>
        )
    }
}
