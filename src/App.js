import React, { Component } from 'react';
import ArtistsContainer from './containers/artists_container'
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from 'react-router-dom'
import Form from './components/sign_form'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import RouterComp from './RouterComp'
import ls from 'local-storage'

import './App.css';

class App extends Component {
  state={
    user: {},
    token: null,
    userLog: '',
    userPassword: '',
    favoriteArtist: [],
    artistInfo: null

  }
componentDidMount(){
  let token = localStorage.token
  if(token){
    fetch('http://localhost:3000/api/v1/profile',{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(userData => this.setState({user: userData.user} , ()=>{
      localStorage.setItem('token', token)
      this.props.history.push('/userprofile')
    }))
  }
}


handleUserChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}


loginSubmitHandler = (e, userInfo) => {
  e.preventDefault()
   return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo)
  })
    .then(resp => resp.json())
    .then(  userData => this.setState({
      user: userData.user,
      token: userData.jwt
    }, (userData)=> {
      localStorage.setItem('token', this.state.token)
        this.props.history.push('/userprofile')
      })
    )
};

favoriteArtist = (artistObj) => {
let user = this.state.user.username
let token = localStorage.token
console.log(artistObj.url);
//   let newFav = [...this.state.favoriteArtist, artistObj]
// this.setState({favoriteArtist: newFav})
return fetch("http://localhost:3000/api/v1/artists", {
 method: "POST",
 headers: {
   "content-type": "application/json",
   Authorization: `Bearer ${token} `
 },
 body: JSON.stringify({username: user, name: artistObj.name, image_url: artistObj.image[2]["#text"]})
})
 .then(resp => resp.json())
 .then(data => this.setState({favoriteArtist: data.artist}, (data)=> {
   localStorage.setItem('favoriteArtist', this.state.favoriteArtist)
     this.props.history.push('/userprofile')
   }))
}


deleteFav =(artistObj) =>{
  let newFav = [...this.state.favoriteArtist].filter(artist =>{
    return artistObj.id !== artist.id
  })
  this.setState({favoriteArtist: newFav})
}

clickHandler = (artistObj) => {
  this.setState({artistInfo: artistObj })
}

  render() {
    return (
      <RouterComp handleChange={this.handleUserChange} clickHandler={this.clickHandler}fav = {this.state.favoriteArtist} delete ={this.deleteFav} favoriteArtist= {this.favoriteArtist} handleSubmit={this.handleSubmit} handleUserChange={this.handleUserChange} handleUserSubmit = {this.loginSubmitHandler} user={this.state.user}/>
    );
  }
}

export default withRouter(App);
