import styled from 'styled-components'


export const Container = styled.div`
    background: var(--dark-gray);
    text-align: center;
    padding: 1.5rem 3rem 1.5rem 3rem;
    border: 1px solid red;

    div{
        display: inline-block;
        @media (max-width:500px){
            display: block;
            padding: 1rem;
            img{
                float: left;
                height: 6rem;
                width: 6rem;
            }
        }
    }
    `

export const Content = styled.div`
    width: 50%;
    text-align: left;
    @media (max-width:500px){
            width:100%;
            text-align: justify;
        }
`

export const Cards = styled.div`
    padding-left: 1rem;
    width: 50%;
    text-align: left;
    @media (max-width:500px){
            width:100%;
        }   
    
`
