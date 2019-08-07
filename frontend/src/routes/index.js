import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';
import ToDo from './../pages/ToDo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <SignIn />} />
      <Route path="/register" exact component={() => <SignUp />} />
      <Route path="/todo" exact isPrivate component={() => <ToDo />} />
    </Switch>
  );
}
