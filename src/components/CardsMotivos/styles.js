import styled from "styled-components";

export const DivGlobal = styled.div`
    display: flex;
    `
export const Container = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    @media (max-width: 500px){
        margin-bottom: 2rem;
    }

`
export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--light-gray);
    padding-bottom: 1rem;
    text-decoration: underline;
`

export const Content = styled.p`
    font-size: 1rem;
    color: var(--light-gray);
    font-weight: normal;
`


export const Number = styled.h1`
    margin-left: 1rem;
    color: var(--red);
    font-weight: bold;
`