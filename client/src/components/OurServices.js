import React, { Component } from 'react'
import StyledOurServices from './styled_components/StyledOurServices'

export default class OurServices extends Component {
    render() {
        return (
            <StyledOurServices id="servicios">
                <h3>NUESTROS PLANES</h3>
                <div className="circle-wrap">
                    <div className="transporte circle"></div>
                    <div className="ciudad circle"></div>
                    <div className="caja circle"></div>
                </div>
            </StyledOurServices>
        )
    }
}
