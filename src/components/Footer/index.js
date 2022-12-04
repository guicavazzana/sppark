import { Container } from './styles'
import { FormContact } from '../FormContact'
import { InfoFooter } from '../InfoFooter'
import { ContactFooter } from '../ContactFooter'

export function Footer(){
    return (
        <Container>
            <div className='info-footer'>
                <InfoFooter />
            </div>
            <div className='form-contact'>
                <FormContact />
            </div>
            <div className='contact-footer'>
                <ContactFooter />
            </div>
        </Container>
    )
}