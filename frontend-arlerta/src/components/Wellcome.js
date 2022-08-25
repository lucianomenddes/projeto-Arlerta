import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Wellcome = () => {
    return (
        <Container maxWidth="sm" sx={{textAlign: 'center'}}>
            <Typography variant="h4" component="div" sx={{marginTop:20}}>
                Bem vindo ao Sistema Arlerta !
            </Typography>
            <Typography variant="h6" component="div" >
                Vamos començar nossa jornada!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{textAlign: 'justify'}}>
              Primeiramente precisamos criar os ambientes que serão monitorado.
            </Typography>
            <Button variant="contained" sx={{marginTop:2}}>Criar ambientes</Button>
      </Container>
    );
}

export default Wellcome