import styled from 'styled-components'

const StyledWhoWeAre = styled.section`
height: 100vh;
display: flex;
flex-direction: column;

.somos-text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 5rem 0 0 2rem;

    h1, h3, p {
        margin: 0;
    }

    h1 {
        font-size: 4rem;
        color: #269443;
        font-family: ‘Helvetica’;
    }

    h3 {
        width: 75%;
    }

    p {
        margin-top: 0.5rem;
        width: 60%;
    }
}

.madrid-noche {
    margin: 5rem 0 0 0;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    overflow: hidden;
    img {
        width: 110%;
        transform: translateX(150px);
    }
}

@media (min-width: 600px){
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    .somos-text {
        width: 75%;
        margin: 0;

        h1, h3, p {
            padding-left: 17rem;
        }
        h1 {
            font-size: 5rem;
        }

        h3 {
            width: 50%;
        }

        p {
            margin-top: 0.5rem;
            width: 35%;
            font-size: 1rem;
        }
    }

    .madrid-noche {
        margin: 0;
        display: flex;
        width: 100%;

        img {
            width: 140%;
            transform: translateX(0px);
        }
    } 
}
`

export default StyledWhoWeAre