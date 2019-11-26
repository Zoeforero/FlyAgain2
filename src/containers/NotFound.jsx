import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container
        component='main'
        className={classes.main}
        maxWidth='sm'
      >
        <Typography
          variant='h2'
          gutterBottom
          align='center'
        >
          404
        </Typography>
        <Typography
          variant='h5'
          component='h2'
          gutterBottom
          align='center'
        >
          Página no encontrada
        </Typography>
        <Typography variant='body1' align='center'>:(</Typography>
      </Container>
    </div>
  );
}
