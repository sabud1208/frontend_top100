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


render(){

    return (<div>
    <UserDetail user = {this.state.user}/>
    {this.state.user.artists ? < UserList favor= {this.state.user.artists} user = {this.state.user} clickHandler={this.props.clickHandler} onClick={this.props.onClick}/> : null}
         </div>)
  }
}
export default Profile;
