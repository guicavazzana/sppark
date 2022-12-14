import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    border-bottom: 2px solid var(--white);
    padding: 1rem;
    @media (max-width:500px) {
        display: block;
        .form-contact{
            text-align: center;
            margin: 1.5rem 0 1.5rem 0;
        }
    }
`