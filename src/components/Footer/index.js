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
                        <img className='img-logo' src={logoImg} alt="logo" />
                    </li>
                    <li>
                        <p>
                            SP PARK<br />
                            Estacionamento e LavaCar<br /><br />
                            
                            R. Sebastião Pereira, 31<br />
                            Centro, Piedade - SP
                        </p>
                    </li>
                    <li>
                        <h3>Contato</h3>
                        <img className='img-contact' src={phoneImg} alt="telefone" />
                        <img className='img-contact' src={facebookImg} alt="facebook" />
                        <img className='img-contact' src={instagramImg} alt="instagram" />
                        <img className='img-contact' src={whatsappImg} alt="whatsapp" />
                    </li>
                </ul>
            </Content>
        </Container>
    )
}