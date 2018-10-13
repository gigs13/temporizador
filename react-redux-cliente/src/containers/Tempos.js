// ./react-redux-client/src/containers/Tempos.js
import { connect } from 'react-redux';
import * as tempoActions from '../actions/tempoActions';
import Tempos from '../components/Tempos';
// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTempoState: state.tempoState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchTempos: () => dispatch(tempoActions.fetchTempos()),
    mappedDeleteTempo: tempoToDelete => dispatch(tempoActions.deleteTempo(tempoToDelete)),
    mappedEditTempo: tempoToEdit => dispatch(tempoActions.editTempo(tempoToEdit))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tempos);
