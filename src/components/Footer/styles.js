import styled from 'styled-components'

export const Container = styled.footer`
    display:flex;
    justify-content: center;
    padding-top: 2rem;
    font-size: 0.8rem;
    img{
        float: left;
        max-width: 2rem;
    }
    .img-contact{
        padding: 0.5rem;
    }
    .img-logo{
        max-width: 5rem;
        padding-right: 1rem;
    }
    h3{
        width: 5rem;
        padding: 0.5rem;
        padding-left: 2rem; 
    }
    `

export const Content = styled.div`
    padding-left: 5rem;
    padding-bottom: 1rem;
    column-count:2;
    column-gap: 5rem;
    width: 60rem;
    
    height: auto;
    margin-left: auto;
    margin-right: auto;
    ul{
        list-style: none;
    }
    align-items: center;
    border-bottom: 2px solid var(--white);
    `
