import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    a{  
        color: var(--white);
        text-decoration: none;
        &:hover {text-decoration: underline;}
    }
`