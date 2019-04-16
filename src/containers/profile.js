import React, { Component } from 'react';
import UserDetail from '../components/user_detail'
import UserList from '../components/user_list'
class Profile extends Component{


render(){
console.log(this.props.user.artists);
    return (<div>
    <UserDetail user = {this.props.user}/>
    {this.props.user.artists ? < UserList favor= {this.props.user.artists} user = {this.props.user} clickHandler={this.props.clickHandler} onClick={this.props.onClick}/> : null}
         </div>)
  }
}
export default Profile;
