import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
<<<<<<< HEAD
    color: ${props => props.theme.colors.gray};
=======
    color: ${props => props.theme.colors.white};
>>>>>>> 04a5301173c673b1289d40d5b62b89c888377f38
    background-color: ${props => props.theme.colors.black};

    padding: 20px;  

    height: calc(100vh - 70px); 
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;
