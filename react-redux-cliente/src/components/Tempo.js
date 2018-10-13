// ./react-redux-client/src/components/Tempo.js
import React from 'react';
export default class Tempo extends React.Component {
  componentDidMount(){
    this.props.mappedfetchTempoById(this.props.params.id);
  }
render(){
    const tempoState = this.props.mappedTempoState;
    return(
      <div className="tempoDetail">
       <h2>Detalle del temporizador</h2>
         {!tempoState.tempo && tempoState.isFetching &&
           <div>
             <p>Cargando temporizador...</p>
           </div>
         }
       {tempoState.tempo && !tempoState.isFetching &&
         <div>
           <h3>{tempoState.tempo.tempoText}</h3>
           <p>{tempoState.tempo.tempoDesc}</p>
         </div>
       }
      </div>
    );
  }
}
