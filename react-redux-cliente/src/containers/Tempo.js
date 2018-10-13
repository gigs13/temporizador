// ./react-redux-client/src/containers/Tempo.js
import { connect } from 'react-redux';
import * as tempoActions from '../actions/tempoActions';
import Tempo from '../components/Tempo';
// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTempoState: state.tempoState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchTempoById: tempoId => dispatch(tempoActions.fetchTempoById(tempoId))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tempo);
