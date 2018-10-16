// ./react-redux-client/src/components/Tempos.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import TempoEditForm from './TempoEditForm';

export default class Tempos extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditTempo = this.submitEditTempo.bind(this);
  }
  componentWillMount(){
    this.props.fetchTempos();
  }

  showEditModal(tempoToEdit){
    this.props.mappedshowEditModal(tempoToEdit);
  }

  hideEditModal(){
    this.props.mappedhideEditModal();
  }

  submitEditTempo(e){
    e.preventDefault();
    const editForm = document.getElementById('EditTempoForm');
    if(editForm.tempoText.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
      data.append('tempoText', editForm.tempoText.value);
      data.append('tempoDesc', editForm.tempoDesc.value);
      this.props.mappedEditTempo(data);
    }
    else{
      return;
    }
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
    const editTempo = tempoState.tempoToEdit;
    return(
      <div className="col-md-12">
        <h3 className="centerAlign">Temporizadores</h3>
        {!tempos && tempoState.isFetching &&
          <p>Cargando temporizadores....</p>
        }
        {tempos.length <= 0 && !tempoState.isFetching &&
          <p>Sin disposición de temporizadores. Añade un temporizador aqui.</p>
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
              {
                tempos.map((tempo,i) => <tr key={i}>
                <td>{tempo.tempoText}</td>
                <td className="textCenter"><Button onClick={() => this.showEditModal(tempo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
                <td className="textCenter"><Button onClick={() => this.showDeleteModal(tempo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
                <td className="textCenter"><Link to={`/${tempo._id}`}>Detalles</Link> </td>
                </tr> )
              }
            </tbody>
          </table>
        }
        {/* Modal for editing tempo */}
        <Modal
          show={tempoState.showEditModal}
          onHide={this.hideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edita tu tarea</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
            {editTempo  &&
              <TempoEditForm tempoData={editTempo} editTempo={this.submitEditTempo} />
            }
            {editTempo  && tempoState.isFetching &&
              <Alert bsStyle="info">
                <strong>Actualizando...... </strong>
              </Alert>
            }
            {editTempo  && !tempoState.isFetching && tempoState.error &&
              <Alert bsStyle="danger">
                <strong>Fallido. {tempoState.error} </strong>
              </Alert>
            }
            {editTempo  && !tempoState.isFetching && tempoState.successMsg &&
              <Alert bsStyle="success">
                Book <strong> {editTempo.tempoText} </strong>{tempoState.successMsg}
              </Alert>
            }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideEditModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
