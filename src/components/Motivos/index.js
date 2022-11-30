import { Container, Content, Title } from './styles'
import { CardsMotivos } from '../CardsMotivos'

export function Motivos(){
    return(
        <>
        <Title>Motivos para lavar seu carro com a gente!</Title>
        <Container>
            <Content>
                <CardsMotivos number='1)' title='Preservação da pintura e do interior' description='Chuva ácida, poeira e cocô de passarinho podem danificar seriamente a pintura do veículo. Por isso, é muito importante adotar alguns cuidados com a lataria'/>
                <CardsMotivos number='2)' title='Evita o acúmulo de bactérias e fungos' description='Pesquisas mostram que as partes internas de um carro podem abrigar até dez mil fungos e bactérias, sem contar a poeira. Para quem leva pets, a situação é ainda pior'/>
                <CardsMotivos number='3)' title='Valorização do veículo' description='Pesquisas mostram que as partes internas de um carro podem abrigar até dez mil fungos e bactérias, sem contar a poeira. Para quem leva pets, a situação é ainda pior'/>
                <CardsMotivos number='4)' title='Prazer e Conforto ao Dirigir' description='O trânsito pode ser melhor se o seu carro estiver limpo e com um cheiro agradável, isso proporciona a sensação de conforto, diminuindo o estresse e ansiedade.'/>
            </Content>
        </Container>
        </>
    )
}