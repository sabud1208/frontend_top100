import React, { Component } from 'react';
import UserDetail from '../components/user_detail'
import UserList from '../components/user_list'

class Profile extends Component{
  state={
    user: {}
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
      .then(userData => this.setState({user: userData.user}))
    }
  }
  onClick = (artistObj) => {

    let token= localStorage.token
    let favorite = this.state.user.favorites.filter(favorite =>{
          return  artistObj.id !== favorite.id
        })
  let user= {...this.state.user}
  user.favorites = favorite

        this.setState({user: user})
          localStorage.setItem('favoriteArtist', this.state.favoriteArtist)

    fetch(`http://localhost:3000/api/v1/favorites/${artistObj.id}`,{
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token} `
      }
    }).then(response => {
            console.log("deleted");

        })
        .catch(error => console.log(error))
  }


render(){

    return (
    <React.Fragment>
      <div className="profile-user-container">
    <UserDetail user = {this.state.user}/>
    </div>
     <div className="profile-container">
     {this.state.user.favorites ? < UserList favor= {this.state.user.favorites} user = {this.state.user} clickHandler={this.props.clickHandler} onClick={this.onClick}/> : null}
    </div>
         </React.Fragment>)
  }
}
export default Profile;
