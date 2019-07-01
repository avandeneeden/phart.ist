import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

import logo from './images/logo.png';


import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Gallery from './pages/Gallery.js';


export const menuItems = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  }
]

export class Header extends React.Component {

  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img className="App-logo" src={logo} alt="Phartist Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menuItems.map(m => <LinkContainer key={'menu_item_'+m.name} exact to={m.path}>
              <Nav.Link>{m.name}</Nav.Link>
            </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}