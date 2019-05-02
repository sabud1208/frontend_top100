import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Container, Menu} from 'semantic-ui-react'
const Navbar = props => {
  return (


  <nav>

      <Link to="/home">
        Home
      </Link>


      <Link to="/userprofile">
        Profile
      </Link>


      <Link to="/artists">
        Artists
      </Link>

    </nav>


  );
};

export default withRouter(Navbar);
