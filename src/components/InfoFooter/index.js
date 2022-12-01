import React from 'react'
import { Container } from './styles'
import logoImg from '../../images/sppark-blank.png'

export function InfoFooter(){
    return(
        <Container>
                <a href="index.html">
                    <img src={logoImg} alt="logo" />
                </a>
            <div>
                <div>
                    <span>SP PARK</span><br />
                    Estacionamento e LavaCar<br /><br />
                </div>
                <div>
                    <a href="https://goo.gl/maps/JHLEazWbzBzWMqSe6">
                        R. Sebastião Pereira, 31<br />
                        Centro, Piedade - SP
                    </a>
                </div>
            </div>
        </Container>
    )
}