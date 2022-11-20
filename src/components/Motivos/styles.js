import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    width: 60rem;
    margin: auto;
    h3{
        padding: 2rem 0 1.5rem 0;
        color: var(--white);
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        
    }
    `

export const Content = styled.div`
    column-count: 2;
    column-gap: 5rem;
    
    .titulo-motivos{
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--light-gray);
        padding-bottom: 1rem;
        text-decoration: underline;
    }
    .texto-motivos{
        font-size: 1rem;
        color: var(--light-gray);
        font-weight: normal;
    }
    ol{
        color: var(--light-gray);
        list-style-position: outside;
        list-style-type: decimal;
        padding-bottom: 2rem;
        
        li{
            padding-top: 3rem;
            font-size: 3rem;
            color: var(--red);
            font-weight: bold;
        }
    }

`

