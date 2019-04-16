import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Container, Menu} from 'semantic-ui-react'
const Navbar = props => {
  return (
    <ul>
    <Container >
  <Menu>
  <Menu.Item>
      <Link to="/home">
        <li>Home</li>
      </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/userprofile">
        <li>Profile</li>
      </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/artists">
        <li>Artists</li>
      </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/signup">
        <li>Sign Up</li>
      </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/login">
        <li>Log In</li>
      </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/login">
        <li>Log Out</li>
      </Link>
      </Menu.Item>
     </Menu>
    </Container>
      </ul>
  );
};

export default withRouter(Navbar);
