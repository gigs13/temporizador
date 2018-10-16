// ./react-redux-client/src/components/TempoEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
const TempoEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditTempoForm" onSubmit={props.editTempo}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tarea: </ControlLabel>
            <input type="hidden" value={props.tempoData._id} name="id"/>
            <FormControl
                type="text" placeholder="Añadir tarea"
                name="tempoText" defaultValue={props.tempoData.tempoText}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Descripcion: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Descripcion de la tarea"
              name="tempoDesc" defaultValue={props.tempoData.tempoDesc}
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Añadir</Button>
      </FormGroup>
    </form>
  );
}
export default TempoEditForm;
