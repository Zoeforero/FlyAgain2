import React from 'react';
import SelectPlace from "../components/SelectPlace";
import Calendar from "../components/Calendar";
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <section>
      <h1>Búsqueda Vuelos</h1>
      <form>
        <SelectPlace placeholder="¿Desde dónde?"/>
        <SelectPlace placeholder="¿A dónde quieres ir?"/>
        <Calendar label="Fecha de salida"/>
        <Calendar label="Fecha de regreso"/>
        <Button variant="contained" color="primary" type="submit">Buscar</Button>
      </form>
    </section>
  );
}

export default Home;
