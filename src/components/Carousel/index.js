import * as React from 'react'
import fundoImg from '../../images/fundo.jpg'
import introImg from '../../images/SPPARK_Intro.png'
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
        <img src={introImg} alt='slide1' className="sliderimg"/>
        <img src={introImg} alt='slide4' className="sliderimg"/>
        
      </AliceCarousel>
    </Container>
  )
}
