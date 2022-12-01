import { Container } from './styles'

import { InfoFooter } from '../InfoFooter'
import { ContactFooter } from '../ContactFooter'

export function Footer(){
    return (
        <Container>
                <InfoFooter />
                <ContactFooter />
        </Container>
    )
}