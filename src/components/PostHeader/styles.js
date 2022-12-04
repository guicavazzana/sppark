import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    background: var(--red);
    line-height: 50px;
    color: var(--white);
    float: left;
    text-align: center;
    margin: 1rem 0 1rem 0;
    @media (max-width: 500px) {
        padding: 1rem;
    }
    
    p{
        font-size: 24px;
        font-weight: bold;
    }

    
`
