import { Container, Content } from './styles'

export function Motivos(){
    return(
        <Container>
            <h3>Motivos para lavar seu carro com a gente!</h3>
            <Content>
                <ol>
                    <li>
                        <p className='titulo-motivos'>Preservação da pintura e do interior</p>
                        <p className='texto-motivos'>Chuva ácida, poeira e cocô de passarinho podem danificar seriamente a pintura do veículo. Por isso, é muito importante adotar alguns cuidados com a lataria</p>
                    </li>
                    <li>
                        <p className='titulo-motivos'>Evita o acúmulo de bactérias e fungos</p>
                        <p className='texto-motivos'>Pesquisas mostram que as partes internas de um carro podem abrigar até dez mil fungos e bactérias, sem contar a poeira. Para quem leva pets, a situação é ainda pior</p>
                    </li>
                    <li>
                        <p className='titulo-motivos'>Valorização do veículo</p>
                        <p className='texto-motivos'>O maior cuidado com o veículo faz com que ele fique mais conservado. E quanto mais conservado ele estiver, mais caro será o seu valor de mercado.</p>
                    </li>
                    <li>
                        <p className='titulo-motivos'>Prazer e Conforto ao Dirigir</p>
                        <p className='texto-motivos'>O trânsito pode ser melhor se o seu carro estiver limpo e com um cheiro agradável, isso proporciona a sensação de conforto, diminuindo o estresse e ansiedade.</p>
                    </li>
                </ol>
            </Content>
        </Container>
    )
}