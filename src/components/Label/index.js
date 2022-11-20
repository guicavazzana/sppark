import {Container, Content} from './styles'

export function Label(){
    return(
        <Container>
            <Content>
                <ul>
                    <li className='right-border'>
                        <p className='titulo-label'>SERVIÇO DE QUALIDADE</p><br/>
                        <p>Buscamos trazer o que há de melhor em produtos e maquinário</p>
                    </li>
                    <li className='right-border'>
                        <p className='titulo-label'>PERFECCIONISMO</p><br/>
                        <p>Aqui cada detalhe importa e, por isso, nossa limpeza é minuciosa</p>
                    </li>
                    <li>
                        <p className='titulo-label'>CUIDADO</p><br/>
                        <p>Seu veículo está protegido, nós possuímos seguro</p>
                    </li>
                </ul>
            </Content>
        </Container>
    )
}