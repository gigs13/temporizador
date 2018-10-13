// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import './App.css';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddTempo = this.toggleAddTempo.bind(this);
  }
toggleAddTempo(e){
    e.preventDefault();
     this.props.mappedToggleAddTempo();
  }
render(){
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
         <NavItem eventKey={1}>Agregar Temporizador</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
