import styled from 'styled-components'

export const SearchStyled = styled.input`
    width: 90vw;
    padding: .7rem;
    border: 1px solid #0003;
    border-radius: 7px;
    margin-top: 1rem;
`;

export const InputButton = styled.input`
    width: 5vw;
    padding: 0.7rem;
    border: 1px solid #0003;
    border-radius: 7px;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`;