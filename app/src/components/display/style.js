import Styled from 'styled-components'

export default Styled.div`
    background-image: url('./bg.jpg');
    background-size: cover;
    display: flex;
    justify-content: space-between;
    height: 100%;

    .scores {
        background-color: rgba(3,3,3,.76);
        padding: 1rem;
        display: grid
        grid-auto-flow: row;
        grid-gap: 1rem;
        height: fit-content;
        margin: 2rem;
        font-size: 2rem;
        .team {
            display: flex;
            justify-content: space-between;
            width: 150px;
        }
    }
    .inning {
        background-color: rgba(3,3,3,.76);
        height: fit-content;
        padding: 2rem;
        margin: 2rem;
        font-size: 2rem;

        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;

        .stat {
            display: flex;
            justify-content: space-between;
            width: 250px;

            div {
                // display: block;
            }
        }
    }
`