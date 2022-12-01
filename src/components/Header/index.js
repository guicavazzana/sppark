import logoImg from '../../images/sppark-blank.png'
import flagImg from '../../images/flag.png'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <div>
                    <a href="index.html">
                        <img src={logoImg} alt="Logo SPPARK" />
                    </a>
                </div>
                <div>
                    <a className='a-maps' href="https://goo.gl/maps/JHLEazWbzBzWMqSe6">
                        R. Sebastião Pereira, 31 - Centro, Piedade - SP
                    </a>
                    <br />
                    <a className='a-phone' href="tel:+5515997097831">
                        Tel: (15) 99709-7831
                    </a> 
                </div>
                <div>
                    <img src={flagImg} alt="flag" />
                </div>
            </Content>
        </Container>
    )
}