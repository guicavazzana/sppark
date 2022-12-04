import { Container } from './styles'

import { InfoFooter } from '../InfoFooter'
import { ContactFooter } from '../ContactFooter'
import { FormContact } from '../FormContact'

export function Footer(){
    return (
        <Container>
                <InfoFooter />
                <FormContact />
                <ContactFooter />
        </Container>
    )
}