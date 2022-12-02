import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: auto;
    height: auto;
    bottom: 2.5rem;
    right: 2.5rem;
    a{
        text-decoration: none;
        color: white;
    }
    .MuiFab-colorInherit{
        background-color: green;
        &:hover {background-color: green}
    }
    `