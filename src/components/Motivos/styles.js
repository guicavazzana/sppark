import styled from 'styled-components'

export const Title = styled.h3`
    padding: 2rem 0 1.5rem 0;
    color: var(--white);
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 2rem;
    grid-row-gap: 2rem;
    padding-bottom: 3rem;
    
    @media (max-width: 500px){
        display: block;
    }
`

