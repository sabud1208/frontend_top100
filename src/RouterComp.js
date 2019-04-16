import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import Profile from  './containers/profile'
import Navbar from './components/Navbar'
import LoginForm from './components/sign_form'
import App from './App'
import ArtistsContainer from './containers/artists_container'

class RouterComp extends React.Component{
  render(){
    return(
      <div>

      <Navbar />
      <Switch>
      <Route  exact path='/artists' render = { (props) => <ArtistsContainer onClick = {this.props.favoriteArtist} user={this.props.user} clickHandler={this.props.clickHandler}/> } />
      <Route exact path='/userprofile' render={(props) => <Profile {...props} user= {this.props.user} fav = {this.props.fav} onClick={this.props.onClick} clickHandler={this.props.clickHandler}/> } />
       <Route exact path='/login' render={(props) => <LoginForm {...props} handleUserChange= {this.props.handleUserChange} handleUserSubmit= {this.props.handleUserSubmit} password={this.props.password}/>} />
       <Route exact path='/signup' render={(props) => < SignUp {...props} /> }/>

     </Switch>
   </div>)
  }
}

export default RouterComp
