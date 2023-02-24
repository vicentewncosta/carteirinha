import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 10px 0;
    padding: 10px;

    border-radius: 8px;

    font-weight: bold;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};

    transition: opacity .4s;

    &:hover{
        opacity: .5;
    }
`;