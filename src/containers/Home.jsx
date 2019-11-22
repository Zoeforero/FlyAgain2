import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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
    <div>
      <section>
        <h1>Búsqueda Vuelos</h1>
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
              defaultValue={undefined}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Button variant='contained' color='primary' type='submit' onClick={buscandoVuelos}>Buscar</Button>
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
