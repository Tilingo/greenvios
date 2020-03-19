import React, { Component } from 'react'
import StyledOurServices from './styled_components/StyledOurServices'
import ServiceCard from './ServiceCard'
import ciudad from '../images/madrid.jpg'
import furgo from '../images/furgo.png'
import caja from '../images/caja.png'


export default class OurServices extends Component {
    render() {
        return (
            <StyledOurServices id="servicios">
                <div className="title">
                    <h3>NUESTROS PLANES</h3>
                </div>
                {/* <div className="circle-wrap">
                    <div className="transporte circle"></div>
                    <div className="ciudad circle"></div>
                    <div className="caja circle"></div>
                </div> */}
                <ServiceCard title='Ciudad' image={ciudad} description='Nos movemos mas rapido que nadie'></ServiceCard>
                <ServiceCard title='Furgo' image={furgo} description='Trabajamos con vehiculos electricos'></ServiceCard>
                <ServiceCard title='Caja' image={caja} description='Ofrecemos el mejor servicio del mercado'></ServiceCard>
            </StyledOurServices>
        )
    }
}
