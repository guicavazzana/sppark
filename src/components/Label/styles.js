import styled from 'styled-components'

export const Container = styled.div`
    background: var(--dark-gray);
    width: 100%;
    min-height: 10rem;
    height: 100%;
    padding: 1rem;
    text-align: center;
    justify-content: center;
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
`

export const Content = styled.div`
    display: flex;
    @media (max-width: 500px) {
        display: block;
    }

`