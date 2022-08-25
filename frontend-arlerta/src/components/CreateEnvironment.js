import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const CreateEnvironment = () =>{
    return(
        <Container maxWidth="sm" sx={{textAlign: 'center'}}>
            <Typography variant="h4" component="div">
                Criar Ambientes
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        variant="standard" 
                        fullWidth
                        id="nomeAmbiente"
                        label="Nome do Ambiente"
                        name="nomeAmbiente"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="standard" 
                        fullWidth
                        id="idAirpure"
                        label="Id Airpure"
                        name="idAirpure"
                        />
                    </Grid>
                    
                    <Grid container spacing={2} sx={{marginTop: 2}}>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>
                                Co2
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            
                        <TextField
                            id="standard-number"
                            label="MAX"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                            id="standard-number"
                            label="MÍN"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop: 2}}>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>
                                COTV
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            
                        <TextField
                            id="standard-number"
                            label="MAX"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                            id="standard-number"
                            label="MÍN"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop: 2}}>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>
                                Umidade 
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            
                        <TextField
                            id="standard-number"
                            label="MAX"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                            id="standard-number"
                            label="MÍN"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop: 2}}>
                        <Grid item xs={4}>
                            <Typography variant="h6" gutterBottom>
                                Temperatura
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            
                        <TextField
                            id="standard-number"
                            label="MAX"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                            id="standard-number"
                            label="MÍN"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            />
                        </Grid>
                    </Grid>
                
                </Grid>
                <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
                >
                "Criar Ambiente"
                </Button>
            </Box>
            
        </Container>
    );
}

export default CreateEnvironment