// ./react-redux-client/src/components/TempoForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
const TempoForm = (props) => {
  return (
    <form className="form form-horizontal" id="addTempoForm" onSubmit={props.addTempo}>
      <div className="row">
        <h3 className="centerAlign">Añadir Tarea</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tarea: </ControlLabel>
            <FormControl
              type="text" placeholder="Nombre de la tarea"
              name="tempoText"/>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Descripcion: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Descripcion de la tarea"
              name="tempoDesc"/>
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Añadir</Button>
      </FormGroup>
    </form>
  );
}
export default TempoForm;
