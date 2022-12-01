import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    h3{
        font-size: 0.8rem;
    }
    img{
        width: 1.2rem;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.6);
        }
    }

    .img-contact{
        display: flex;
        justify-content: space-around;
        margin-top: 0.2rem;
        @media (max-width: 500px){
            margin: 0 1rem 0 1rem;
            justify-content: center;
        }
    }
    .img-phone{
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        a{
            color: var(--white);
            font-size: 0.8rem;
            text-decoration:none;
            &:hover {text-decoration:underline}
        }
        img{
            margin-right: 0.5rem;
        }
        @media (max-width: 500px){
            display: block;
            padding: 0.5rem;
            margin: 0 auto;
            img{
                vertical-align: middle;
            }
        }
    }

`