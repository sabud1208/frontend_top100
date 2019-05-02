import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { Button} from 'semantic-ui-react'


class Log extends Component{
  render(){
    return(
      <div className = 'log'>
      <div className="log-buttons">

            <Link to='/signup'> <Button basic color='teal' size='massive'>Sign Up</Button></Link>
            <Link to='/login'> <Button basic color='teal' size='massive'>Login</Button></Link>

            </div>
          </div>)
    }
}

export default Log
