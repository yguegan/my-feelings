import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../components/Form'
import Statistics from '../components/Statistics';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/historic" component={Statistics} />
    </Switch>
  );
}