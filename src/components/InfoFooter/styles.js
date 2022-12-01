import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    font-size: 0.6rem;
    span{
        font-weight: bold;
    }
    img{
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
    }
    a{
        color: var(--white);
        text-decoration:none;
        &:hover {text-decoration:underline}
    }


    @media (max-width:500px){
        justify-content: space-around;
        text-align: right;
        padding-bottom: 0.5rem;
        padding-top: 1rem;
    }
`