import styled from 'styled-components'

export const Container = styled.div`
    background: var(--dark-gray);
    width: 100vw;
    min-height: 10rem;
    height: 100%;
    padding: 2rem;
    text-align: center;
    display: flex;
    hr{
        width: 0.1rem;
        background-color: var(--black);
        height: 70%;
        border: none;
        margin-top: 1.5rem;
    }
    @media (max-width: 500px) {
        display: block;
        hr{
        background-color: var(--black);
        border: none;
        height: 0.2rem;
        width: 100%;
    }
    }
    /*margin-top: 1.5rem;
    text-align: center;
    justify-content: center;
    color: var(--white);
    display: flex;
    
    
    .titulo-label{
        font-weight: bold;
        font-size: 20px;
        border-bottom: 4px solid var(--red);
    }

    .right-border{
        border-right: 2px solid var(--black);
    }

    p{
        font-size: 16px;
    } */
    
`

export const Content = styled.div`
    display: flex;
    @media (max-width: 500px) {
        display: block;
    }

`