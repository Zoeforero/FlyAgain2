import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};
export default App;