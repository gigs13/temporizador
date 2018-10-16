// ./react-redux-client/src/components/Tempos.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
export default class Tempos extends React.Component {
  constructor(props){
    super(props);
  }
componentWillMount(){
    this.props.fetchTempos();
  }
showEditModal(bookToEdit){
     //this.props.mappedshowEditModal(tempoToEdit);
  }
hideEditModal(){
      //this.props.mappedhideEditModal();
  }
hideDeleteModal(){
    //this.props.mappedhideDeleteModal();
  }
showDeleteModal(tempoToDelete){
    //this.props.mappedshowDeleteModal(tempoToDelete);
  }
render(){
    const tempoState = this.props.mappedTempoState;
    const tempos = tempoState.tempos;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Temporizadores</h3>
      {!tempos && tempoState.isFetching &&
        <p>Cargando temporizadores....</p>
      }
      {tempos.length <= 0 && !tempoState.isFetching &&
        <p>Sin disosición de temporizadores. Añade un temporizador aqui.</p>
      }
      {tempos && tempos.length > 0 && !tempoState.isFetching &&
      <table className="table booksTable">
        <thead>
         <tr>
          <th>Temporizador</th>
          <th className="textCenter">Editar</th>
          <th className="textCenter">Eliminar</th>
          <th className="textCenter">Ver</th>
         </tr>
        </thead>
        <tbody>
          {tempos.map((tempo,i) => <tr key={i}>
          <td>{tempo.tempoText}</td>
           <td className="textCenter"><Button onClick={() => this.showEditModal(tempo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
           <td className="textCenter"><Button onClick={() => this.showDeleteModal(tempo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
           <td className="textCenter"><Link to={`/${tempo._id}`}>Detalles</Link> </td>
           </tr> )
          }
        </tbody>
      </table>
    }
      </div>
    );
  }
}
