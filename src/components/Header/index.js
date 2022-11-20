import logoImg from '../../images/sppark-blank.png'
import flagImg from '../../images/flag.png'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <a href="index.html">
                <img src={logoImg} alt="Logo SPPARK" />
                </a>
                <a className='a-maps' href="https://goo.gl/maps/JHLEazWbzBzWMqSe6">
                    R. Sebastião Pereira, 31 - Centro, Piedade - SP
                </a>
                <br/>
                <br/>
                <a className='a-phone' href="tel:+5515991167252">
                    Tel: (15) 99116-7252
                </a> 
                <img src={flagImg} alt="flag" />
            </Content>
        </Container>
    )
}