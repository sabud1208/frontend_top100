import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


class Log extends Component{
  render(){
    return(<div className="log-buttons">
            <Link to='/signup'><button>Sign Up</button> </Link>
            <Link to='/login'><button>Login</button> </Link>
            </div>)
    }
}

export default Log
