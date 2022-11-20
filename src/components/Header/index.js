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
                <p>R. Sebastião Pereira, 31 - Centro, Piedade - SP<br/><br/>
                    Tel: (15) 11111-1111
                </p>
                <img src={flagImg} alt="flag" />
            </Content>
        </Container>
    )
}