// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddTempo: false
}
const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_TEMPO':
          return {
            ...currentState,showAddTempo: !currentState.showAddTempo
          }
    default:
           return currentState;
    }
}
export default appReducer;
