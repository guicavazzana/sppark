import styled from 'styled-components'

export const DivGlobal = styled.div`
    display: flex;
    `
export const Container = styled.div`
    padding: 1rem;

`
export const Imagem = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
    float:left;
    `
export const Title = styled.h4`
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: underline;
    `
export const Content = styled.p`
    @media (max-width:500px) {
    padding-left: 2rem;
}
`