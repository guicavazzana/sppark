import React from 'react'
import { Container, Title } from './styles'
 
export function Cards({title, description, border}){
    return(
        <Container border={border}>
            <Title>{title}</Title><br/>
            <p>{description}</p>
        </Container>
    )
}