// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Tempos from './containers/Tempos';
import Tempo from './containers/Tempo';
export default (
  <Route path="/" component={App}>
     <IndexRoute component={Tempos} />
     <Route path="/:id" component={Tempo} />
  </Route>
)
