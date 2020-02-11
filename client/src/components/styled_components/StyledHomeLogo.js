import styled from 'styled-components'

const StyledHomeLogo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

img {
    width: 100%;
}

@media (min-width: 600px){
    img{
        width: 100%;
    }
}
`

export default StyledHomeLogo