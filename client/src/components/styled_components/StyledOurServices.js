import styled from 'styled-components'
import ciudad from '../../images/madrid.jpg'
import furgo from '../../images/furgo.png'
import caja from '../../images/caja.png'

const StyledOurServices = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

.title {
    align-self: baseline;
    width: 50%;
    h3 {
        font-size: 1.4rem;
        margin-left: 10px;
    }
}

.circle-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.circle {
    width: 200px;
    height: 200px;
    margin: 10px 0;
    border-radius: 50%;
    background-size: cover;
    box-shadow: 0px 1px 12px -8px rgba(0,0,0,0.75);
    transition: all .3s ease-in-out;

    &:hover{
        box-shadow: 0px 8px 31px -4px rgba(0,0,0,0.75);
        transform: translate3d(0px, -5px, 0px);
    }
}

.transporte {
    background-image: url(${furgo});
    background-position: 50% 100%;
}

.ciudad {
    background-image: url(${ciudad});
    background-position: 50% 50%;
}

.caja {
    background-image: url(${caja});
    background-position: 50% 90%;
}

@media (min-width: 600px){

}
`

export default StyledOurServices