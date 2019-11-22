import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { selectPlaceOrigin, selectPlaceDestiny } from '../actions/indexActions';

const options = [
  { value: 'Medellín', label: 'Medellín' },
  { value: 'Cartagena', label: 'Cartagena' },
  { value: 'Bogotá', label: 'Bogotá' },
  { value: 'Barranquilla', label: 'Barranquilla' },
  { value: 'Ibagué', label: 'Ibagué' },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    margin: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { lugar1, lugar2, listaVuelos } = props;

  const [vuelosEncontrados, setVuelosEncontrados] = React.useState([]);

  const handleChangeOrigin = (option) => {
    props.selectPlaceOrigin(option);
  };

  const handleChangeDestiny = (option) => {
    props.selectPlaceDestiny(option);
  };

  const buscandoVuelos = (event) => {
    event.preventDefault();
    let temp = listaVuelos.filter((vuelo) => vuelo.origin === props.lugar1.value);
    temp = temp.filter((vuelo) => vuelo.destiny === props.lugar2.value);
    setVuelosEncontrados(temp);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <section>
          <Typography component='h1' variant='h5'>
            Búsqueda vuelos
          </Typography>
          <form method='get'>
            <Select
              name='origin'
              value={lugar1}
              onChange={handleChangeOrigin}
              options={options}
              placeholder='¿Desde dónde?'
            />
            <Select
              name='destiny'
              value={lugar2}
              onChange={handleChangeDestiny}
              options={options}
              placeholder='¿A dónde quieres ir?'
            />
            <div className={classes.container}>
              <TextField
                id='date1'
                name='date1'
                label='Fecha de salida'
                type='date'
                margin='normal'
                defaultValue={undefined}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className={classes.container}>
              <TextField
                id='date2'
                name='date2'
                label='Fecha de regreso'
                type='date'
                margin='normal'
                defaultValue={undefined}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              onClick={buscandoVuelos}
              className={classes.submit}
            >
              Buscar
            </Button>
          </form>
        </section>
        <section>
          <h3>{vuelosEncontrados.length > 0 ? 'Vuelo encontrado' : 'Sin vuelos'}</h3>
          {vuelosEncontrados.length > 0 && (
            <ul>
              <li>
                {`Origen: ${vuelosEncontrados[0].origin}`}
              </li>
              <li>
                {`Destino: ${vuelosEncontrados[0].destiny}`}
              </li>
              <li>
                {`Fecha de vuelo: ${vuelosEncontrados[0].date}`}
              </li>
            </ul>
          )}
        </section>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  lugar1: state.placeOrigin,
  lugar2: state.placeDestiny,
  listaVuelos: state.vuelosDisponibles,
});

const mapDispatchToProps = {
  selectPlaceOrigin,
  selectPlaceDestiny,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
