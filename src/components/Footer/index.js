import { Container, Content } from './styles'
import logoImg from '../../images/sppark-blank.png'
import phoneImg from '../../images/phone.png'
import facebookImg from '../../images/facebook.png'
import instagramImg from '../../images/instagram.png'
import whatsappImg from '../../images/whatsapp.png'

export function Footer(){
    return (
        <Container>
            <Content>
                <ul>
                    <li>
                        <a href="index.html">
                            <img className='img-logo' src={logoImg} alt="logo" />
                        </a>
                    </li>
                    <li>
                        <p>
                            SP PARK<br />
                            Estacionamento e LavaCar<br /><br />
                        <a className='a-maps' href="https://goo.gl/maps/JHLEazWbzBzWMqSe6">
                            R. Sebastião Pereira, 31<br />
                            Centro, Piedade - SP
                        </a>
                        </p>
                    </li>
                    <li>
                        <h3>Contato</h3>
                        <a href="tel:+5515991167252">
                            <img className='img-contact' src={phoneImg} alt="telefone" />
                        </a>
                        <a href="https://www.facebook.com/sppark.piedade.1">
                            <img className='img-contact' src={facebookImg} alt="facebook" />
                        </a>
                        <a href="https://instagram.com/spparkestacionamento?igshid=ZmRIMzRkMDU=">
                            <img className='img-contact' src={instagramImg} alt="instagram" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5515997097831&text=Ligue+agora+&fbclid=PAAaatvX0XvPgvZZTIwGHXKDLieXNPTHL0Q3KnNP639-JP7u0MXU58_Oo3ftU">
                            <img className='img-contact' src={whatsappImg} alt="whatsapp" />
                        </a>
                    </li>
                </ul>
            </Content>
        </Container>
    )
}