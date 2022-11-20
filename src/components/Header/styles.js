import styled from 'styled-components'

export const Container = styled.header`
    background: var(--black);
    border-bottom: 2px solid;
    border-bottom-color: var(--white);
`

export const Content = styled.div`
    max-width: 1120px;
    height: 5.5rem;
    margin: 0 auto;
    padding: 0.5rem 3rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    img{
    max-width: 7rem;
    max-height: 5rem;
    width: auto;
    height: auto;
    vertical-align: middle;
    }

    a{
        color: var(--white);
        font-style: italic;
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        text-decoration: none;
    }
    .a-maps{
        &:hover {text-decoration: underline};
    }
    .a-phone{
        &:hover {text-decoration: underline};
    }
`