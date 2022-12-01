import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    font-size: 0.6rem;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    a{  
        color: var(--white);
        text-decoration: none;
        @media (max-width:500px) {
            font-size: 0.5rem;
        }
        &:hover {text-decoration: underline;}
    }
`