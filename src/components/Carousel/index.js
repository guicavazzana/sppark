import * as React from 'react'
import fundoImg from '../../images/fundo.jpg'
import carroImg from '../../images/carro.jpg'
import carro1Img from '../../images/carro1.jpg'
import { Container } from './styles'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export function CarouselHome(){
  return(
    <Container>
      <AliceCarousel 
      autoPlay
      autoPlayInterval="3000"
      infinite='true'
      disableButtonsControls
      >
        <img src={carroImg} alt='slide1' className="sliderimg"/>
        <img src={carro1Img} alt='slide2' className="sliderimg"/>
        <img src={fundoImg} alt='slide3' className="sliderimg"/>
        <img src={carroImg} alt='slide4' className="sliderimg"/>
        <img src={carro1Img} alt='slide5' className="sliderimg"/>
        <img src={fundoImg} alt='slide6' className="sliderimg"/>

      </AliceCarousel>
    </Container>
  )
}
