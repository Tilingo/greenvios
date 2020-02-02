import styled from 'styled-components'

const StyledHomePage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;

.logo-wrap {
    text-align: center;
    width: 100%;
    img {
        width: 100%;
    }
}

@media (min-width: 600px){
    .logo-wrap img{
        width: 50%;
    }
}
`

export default StyledHomePage