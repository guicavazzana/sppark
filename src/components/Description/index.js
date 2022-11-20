import { Container, Content, List, Text } from "./styles";
import cronometroImg from '../../images/cronometro.png'
import caminhaoImg from '../../images/caminhao.png'
import localizacaoImg from '../../images/localizacao.png'

export function Description(){
    return(
        <Container>
            <Content>
                <ul>
                    <Text>
                    <li>
                        <p>
                            <h3>SP PARK</h3><br />
                            <h4>ESTACIONAMENTO E LAVACAR</h4><br />
                            Temos compromisso com a entrega de excelentes limpezas feitas de forma detalhada com muito preciosismo.<br />

                            Seu veículo é como membro da família e aqui receberá os melhores cuidados com equipamentos de linha e produtos da melhor qualidade.<br />

                            Possuímos seguro!<br />

                            <h4><u>TRAGA SEU VEÍCULO!</u></h4>
                        </p>
                    </li>
                    </Text>
                    <List>
                    <li>
                        <img src={cronometroImg} alt="cronometro" />
                        <p>
                            <h4>Lavagem Agilizada</h4><br />
                            Te antenderemos de prontidão para higienizar seu veículo
                        </p>
                    </li>
                    <li>
                        <img src={caminhaoImg} alt="caminhão" />
                        <p>
                            <h4>Sistema Leva e Traz</h4><br />
                            Consulte a região de atendimento do serviço de Leva e Traz
                        </p>
                    </li>
                    <li>
                        <img src={localizacaoImg} alt="localização" />
                        <p>
                            <h4>Ótima Localização</h4><br />
                            Estamos localizados no coração de Piedade - SP
                        </p>
                    </li>
                </List>
                </ul>
            </Content>
        </Container>
    )
}