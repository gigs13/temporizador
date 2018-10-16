// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import TempoForm from './TempoForm';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.toggleAddTempo = this.toggleAddTempo.bind(this);
    this.addTempo = this.addTempo.bind(this);
  }

  toggleAddTempo(e){
    e.preventDefault();
    this.props.mappedToggleAddTempo();
  }

  addTempo(e){
    e.preventDefault();
    const form = document.getElementById('addTempoForm');
    if (form.tempoText.value !== ""  && form.tempoDesc.value !== ""){
      const data = new FormData();
      data.append('tempoText', form.tempoText.value);
      data.append('tempoDesc', form.tempoDesc.value);
      //data.append('tempoDur', form.tempoDur.value);
      this.props.mappedAddTempo(data);
    }
    else{
      return ;
    }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
        <Navbar inverse  collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Aplicacion Temporizadores</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/', query: {  } }}>
                <NavItem eventKey={1}>Inicio</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddTempo}>
                <NavItem eventKey={1}>Agregar Tarea</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {appState.showAddTempo &&
            <TempoForm addTempo={this.addTempo} />
          }
          { /* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
