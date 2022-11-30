import { Container, Content, Cards } from "./styles";
import { CardsDescription } from "../CardsDescription";
import { TextDescription } from "../TextDescription";
import cronometroImg from '../../images/cronometro.png'
import caminhaoImg from '../../images/caminhao.png'
import localizacaoImg from '../../images/localizacao.png'

export function Description(){
    return(
        <Container>
            <div>
            <Content>
                <TextDescription />
            </Content>
            <Cards>
                <CardsDescription imagem={cronometroImg} title='Lavagem Agilizada' description='Te antenderemos de prontidão para higienizar seu veículo'/>
                <CardsDescription imagem={caminhaoImg} title='Sistema Leva e Traz' description='Consulte a região de atendimento do serviço de Leva e Traz'/>
                <CardsDescription imagem={localizacaoImg} title='Ótima Localização' description='Estamos localizados no coração de Piedade - SP'/>
            </Cards>
            </div>
        </Container>
    )
}