import styled from 'styled-components'

export const Container = styled.div`
    background: var(--dark-gray);
    width: 100%;
    height: 10rem;
    margin-top: 1.5rem;
    text-align: center;
    justify-content: center;
    color: var(--white);
    display: flex;
    
    .titulo-label{
        font-weight: bold;
        font-size: 20px;
        border-bottom: 4px solid var(--red);
    }

    .right-border{
        border-right: 2px solid var(--black);
    }

    p{
        font-size: 16px;
    }
    
    ul{
        list-style-type:none;
        
        li{
            float: left;
            padding-right: 2rem;
            padding-left: 2rem;
            height: 5rem;
            width: 20rem;
            
        }
    }
`

export const Content = styled.div`
    display: table;
    align-self: center;
`