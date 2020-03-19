import styled from 'styled-components'
import img from '../../images/madrid.jpg'

const StyledMission = styled.section`
margin: 25px 0 0 0;
background-image: url(${img});
background-size: cover;

.mission, .horarios {
    padding: 15px 0;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        text-align: center;
    }
}

.mission p {
    width: 85%;
}

.horarios {
    line-height: 5px;

    h3 {
        padding-bottom: 5px;
    }
}
`

export default StyledMission