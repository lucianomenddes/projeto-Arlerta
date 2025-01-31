import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
 
 


 const SignUpSide = () => {


  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  variant="standard" 
                  fullWidth
                  id="organizacao"
                  label="Organizacao"
                  name="organizacao"
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  variant="standard" 
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  variant="standard" 
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  
              
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard" 
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                 
                
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard" 
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  
                 
                />
              </Grid>
            </Grid>
            <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
             
          >
            "Continuar"
          </Button>

          { <Alert severity="error">{}</Alert> }
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  
  );
}
export default SignUpSide 