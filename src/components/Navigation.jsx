import React from 'react';
import { Nav, Navbar, NavItem, Tabs, Tab, LinkContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          Invoice App
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Text>
        <Link to="customers">Customers</Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to="products">Products</Link>
      </Navbar.Text>
    </Navbar>
  );
}

export default Navigation;
