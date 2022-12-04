import Fab from '@material-ui/core/Fab'
import { Container } from './styles'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function WhatsappButton(){
    return(
        <Container>
            <a href="https://api.whatsapp.com/send?phone=5515997097831&text=Ol%C3%A1!+Encotrei+voc%C3%AAs+pela+internet+e+gostaria+de+saber+sobre+&fbclid=PAAaatvX0XvPgvZZTIwGHXKDLieXNPTHL0Q3KnNP639-JP7u0MXU58_Oo3ftU">
            <Fab color="inherit" aria-label="whatsapp">
                <WhatsAppIcon />
            </Fab>
            </a>
        </Container>
    )
}