import styled from 'styled-components';
import backgroundImage from '../../assets/tela-de-login.webp';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundImage});
    background-color: ${props => props.theme.colors.black};
`;


export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h2 {
        color: ${props => props.theme.colors.gray}; 
        margin-left: 7px;
    }

    > img {
        width: 40px;
        height: 40px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 9px;

    background-color: ${props => props.theme.colors.secondary};
`;

export const FormTitle = styled.h1`

    margin-bottom: 40px;

    color: ${props => props.theme.colors.white}; 

    &:after {
        content: '';
        display: block;
        width: 90px;
        border-bottom: 10px solid ${props => props.theme.colors.white};  
    }
`;

