import styled from 'styled-components'

export const Container = styled.div`
    .botao-fale{
    background-color: var(--dark-gray);
    border: none;
    border-radius: 5px;
    color: var(--white);
    padding: 10px 16px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        transition: filter 0.2s;
        filter: brightness(0.8);
    }
}
    
`
