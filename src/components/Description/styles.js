import styled from 'styled-components'


export const Container = styled.div`
    background: var(--dark-gray);
    text-align: center;
    padding: 1.5rem 3rem 1.5rem 3rem;
    @media (max-width:500px) {
        padding: 0 0 0 0;
    }
    
    div{
        display: inline-block;
        @media (max-width:500px){
            display: block;
            padding: 1rem;
        }
    }
    `

export const Content = styled.div`
    width: 50%;
    text-align: left;
    @media (max-width:500px){
        width:100%;
        text-align: left;
    }
    `

export const Cards = styled.div`
    padding-left: 1rem;
    width: 50%;
    text-align: left;
    img{
        margin-top: 1rem;
        margin-right: -0.2rem;
    }
    @media (max-width:500px){
            width:100%;
        }   
    
`
