import {Container, Content} from './styles'
import {Cards} from '../Cards'

export function Label(){
    return(
        <Container>
            <Content>
                <Cards title='serviço de qualidade' description='Buscamos trazer o que há de melhor em produtos e maquinário' />
                <hr />
                <Cards border title='perfeccionismo' description='Aqui cada detalhe importa e, por isso, nossa limpeza é minuciosa'/>
                <hr />
                <Cards title='segurança' description='Seu veículo está protegido, nós possuímos seguro'/>
            </Content>
        </Container>
    )
}