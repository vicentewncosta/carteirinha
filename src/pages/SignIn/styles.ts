
import styled from 'styled-components';

/* Lembrar de importar o local da imagem */


export const Container = styled.div`

    height: 100vh;    
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
/*  PARA COLOCAR UMA IMAGEM NO TELA DE FUNDO, BASTA ADICIONAR ESSAS DUAS LINHAS  
    NA CONSTA ACIMA;

    background-image: url(${backgroundImage});
    background-color: ${props => props.theme.colors.black};
*/
export const Logo = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 30px;

        > h2 {
            color: ${props => props.theme.colors.white}; 
            margin-left: 9px;
        }

        > img {
            width: 40px;
            height: 40px;
    }
`;


/* ESTILIZAÇÃO DO FORMULÁRIO DE ENTRADA */ 
export const Form = styled.form`

    width: 300px;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.gray};

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

