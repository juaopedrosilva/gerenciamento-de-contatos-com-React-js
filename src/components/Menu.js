import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, 
        NavbarBrand, Nav, NavItem, 
        NavLink, UncontrolledDropdown, 
        DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Menu extends Component 
{ 
  constructor(props)
  {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() 
  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Gereciamento de contatos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/'>
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem> 
              <NavItem>
                <Link to='/about'>
                  <NavLink>Sobre</NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link to='/new'>
                  <NavLink>Novo Contato</NavLink>
                </Link> 
              </NavItem>
          
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}
