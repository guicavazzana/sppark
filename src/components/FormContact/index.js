import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Container } from './styles'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function FormContact() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <div>
                <Button onClick={handleOpen}>Fale Conosco</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <h2>
                        Fale Conosco!
                    </h2>
                    <h3>
                        Envie-nos dúvidas, críticas ou sujestões que entraremos em contato para lhe responder!
                    </h3>
                    <form action="">
                    <TextField id="outlined-basic" label="Nome Completo *" variant="outlined" />

                    </form>
                </Box>
                </Modal>
            </div>
        </Container>
    );
    }