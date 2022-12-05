import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Container } from './styles'
 

export function FormContact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xxbfl2y', 'template_xjuwfbh' , form.current ,'dR-ZM0kx7NzPRj6rv')
        .then(() => {
            alert('Mensagem enviada!');
        }, () => {
            alert('Desculpe, um erro ocorreu ao enviar a mensagem');
        });
    };

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false)
      }

  return (
    <>
    <Container>
      <button variant="text" className='botao-fale' onClick={handleClickOpen}>
        Fale Conosco
      </button>
    </Container>
      <Dialog open={open} onClose={handleClose}>
    <form ref={form} onSubmit={sendEmail}>
        <DialogTitle>Fale Conosco!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Envie-nos elogios, criticas, sugestões ou dúvidas que entraremos em contato para te atender melhor!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label="Nome Completo"
            type="name"
            fullWidth
            variant="standard"
            required
        />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name='email'
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            required
        />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            name='phone'
            label="Telefone"
            type="phone"
            fullWidth
            variant="standard"
            required
        />
          <TextField
            autoFocus
            id="descricao"
            name='description'
            label="Descrição"
            margin="dense"
            multiline
            maxRows={4}
            fullWidth
            variant="standard"
            required
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type='submit' onClick={handleClose}>Enviar</Button>
        </DialogActions>
    </form>
      </Dialog>
    </>
  );
}
