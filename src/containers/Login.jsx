import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const refrescar = (event) => {
    event.preventDefault();
  };
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Correo electrónico'
            name='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Mantener la sesión iniciada'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            onClick={refrescar}
            className={classes.submit}
          >          
          <Link to='/home'
          >
            Ingresar
          </Link>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/' variant='body2'>
                Olvidó su contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/register' variant='body2'>
                No tienes cuenta? Registrate
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
