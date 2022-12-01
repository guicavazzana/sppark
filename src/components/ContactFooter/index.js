import React from 'react';
import { Container } from './styles'
import phoneImg from '../../images/phone.png'
import facebookImg from '../../images/facebook.png'
import instagramImg from '../../images/instagram.png'
import whatsappImg from '../../images/whatsapp.png'

export function ContactFooter(){
    return(
        <Container>
            <div>
                <h3>Contato</h3>
            </div>
            <div className='img-phone'>
                <a href="tel:+5515991167252">
                    <img src={phoneImg} alt="telefone" />
                </a>
                <a href="tel:+5515991167252">(15) 99116-7252</a>

            </div>
            <div className='img-contact'>
                <a href="https://www.facebook.com/sppark.piedade.1">
                    <img className='img-contact' src={facebookImg} alt="facebook" />
                </a>
                <a href="https://instagram.com/spparkestacionamento?igshid=ZmRIMzRkMDU=">
                    <img className='img-contact' src={instagramImg} alt="instagram" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5515997097831&text=Ligue+agora+&fbclid=PAAaatvX0XvPgvZZTIwGHXKDLieXNPTHL0Q3KnNP639-JP7u0MXU58_Oo3ftU">
                    <img className='img-contact' src={whatsappImg} alt="whatsapp" />
                </a>
            </div>
        </Container>
    )
}