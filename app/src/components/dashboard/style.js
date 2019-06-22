import Styled from 'styled-components'

export default Styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .actions {
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        button {
            background-color: transparent;
            border: 0;
            color: #4DB7B7;
            cursor: pointer;
            font-size: 2.6rem;
            outline: none;
            &:hover {color: #ccc}
        }
    }
`