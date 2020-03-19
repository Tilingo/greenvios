import styled from 'styled-components'

const StyledTeam = styled.section`
background: black;
color: white;
display: flex;
flex-direction: column;
text-align: center;
overflow: hidden;

h3 {
    align-self: flex-start;
    margin: 50px 0 10px 50px;
    color: green;
}

.content-wrap {
    border: 3px solid darkgreen;
    padding: 50px;
    margin: 0 50px 50px 50px;
    position: relative;
    z-index: 999;
}

.secondary-wrap {
    border: 1px solid lightgray;
    padding: 215px;
    left: 50%;
    top: 50%;
    /* margin: 0 50px 50px 50px; */
    /* transform: rotate(45deg); */
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
}
`

export default StyledTeam