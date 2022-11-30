import React from 'react'
import { DivGlobal, Container, Imagem, Title, Content } from './styles'


export function CardsDescription({imagem, title, description}){
    return(
        <DivGlobal>
            <Imagem src={imagem} alt='imagem'/>
            <Container>
                <Title>{title}</Title><br />
                <Content>{description}</Content>
            </Container>
        </DivGlobal>
    )
}