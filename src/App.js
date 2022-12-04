import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { CarouselHome } from './components/Carousel'
import { PostHeader } from './components/PostHeader'
import { Label } from './components/Label'
import { Motivos } from './components/Motivos'
import { Footer } from './components/Footer'
import { Description } from './components/Description'
import { Copyright } from './components/Copyright'
import { WhatsappButton } from './components/WhatsappButton'


export function App() {
  return (
    <>
    <Header />

    <PostHeader />

    <CarouselHome/>

    <Label />

    <Motivos />

    <Description />

    <Footer />

    <Copyright />

    <WhatsappButton />

    <GlobalStyle />
    
    </>
  )
}
