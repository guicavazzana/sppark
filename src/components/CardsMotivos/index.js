import React from 'react'
import { Container, Title, Content, DivGlobal, Number } from './styles'

export function CardsMotivos({number, title, description}){
    return(
        <DivGlobal>
            <Number>{number}</Number>
            <Container>
                <Title>{title}</Title>
                <Content>{description}</Content>           
            </Container>
        </DivGlobal>
    )
}