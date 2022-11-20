import styled from 'styled-components'


export const Container = styled.div`
    background: var(--dark-gray);
    color: var(--white);
    img{
        float: left;
    }
    `

export const Content = styled.div`
    column-count:2;
    column-gap: 5rem;
    width: 60rem;
    height: auto;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
    ul{
        list-style: none;
    }
    `
export const List = styled.div`
    display: table-cell;
    padding-top: 2rem;
    p{
        padding-left: 2rem;
        padding-bottom: 1rem;
        h4{
            font-size: 1rem;
            text-decoration: underline;
        }
    }
`

export const Text = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;

`