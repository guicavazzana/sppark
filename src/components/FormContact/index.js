import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Container } from './styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styleBox } from './styles'

export function BasicSelect() {
    const [tipo, setTipo] = React.useState('');
  
    const handleChange = (event) => {
      setTipo(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{minWidth: 180}}>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipo}
            label="Tipo"
            onChange={handleChange}
          >
            <MenuItem value={'informacoes'}>Informações</MenuItem>
            <MenuItem value={'sugestoes'}>Sugestões</MenuItem>
            <MenuItem value={'criticas'}>Criticas</MenuItem>
            <MenuItem value={'elogios'}>Elogios</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

export function FormContact() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <div>
                <Button className='button-fale' onClick={handleOpen}
                sx={{'&:hover': {backgroundColor: '#363636'}}}
                >
                  Fale Conosco
                </Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
              <div>
                <Box style={styleBox}>
                  <div>
                    <h2>
                        <u>Fale Conosco!</u> 
                    </h2>
                    <br />
                    <h3>
                        Envie-nos dúvidas, críticas ou sugestões que entraremos em contato para lhe responder!
                    </h3>
                  </div>
                    <form action="">
                      <div>
                        <TextField sx={{mt: 4, mr: 3, minWidth: 250}} id="outlined-basic" label="Nome Completo *" variant="outlined" />
                        <TextField sx={{mt: 4, minWidth: 250}} id="outlined-basic" label="Email *" variant="outlined" />
                      </div>
                      <div>
                        <TextField sx={{my: 2, minWidth: 250}} id="outlined-basic" label="Telefone *" variant="outlined" />
                      </div>
                      <div>
                        <BasicSelect sx={{minWidth: 250}} />
                      </div>
                      <div>
                        <TextField sx={{mt: 2}} id="outlined-multiline-static" label="Descrição *" variant="outlined" multiline />
                      </div>
                    </form>
                </Box>
              </div>
                </Modal>
            </div>
        </Container>
    );
    }