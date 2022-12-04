import { Container } from './styles'
import { FormContact } from '../FormContact'
import { InfoFooter } from '../InfoFooter'
import { ContactFooter } from '../ContactFooter'

export function Footer(){
    return (
        <Container>
                <InfoFooter />
                <FormContact />
                <ContactFooter />
        </Container>
    )
}