// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import tempoReducer from './tempoReducer';
export default combineReducers({
  appState:appReducer,
  tempoState:tempoReducer,
  routing
  // More reducers if there are
  // can go here
})
