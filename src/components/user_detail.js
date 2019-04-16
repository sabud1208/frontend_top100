import React, { Component } from 'react';


class UserDetail extends Component{


  render(){

    return( <div className="user">
    <div>
      <label>Avatar:</label>
      <br/>
      <img src = {this.props.user.avatar} alt = ''/>
    </div>

    <div>
      <h3>Name:{this.props.user.username}</h3>
      </div>
      <div>
    <h3>Bio:{this.props.user.bio}</h3>
      </div>
</div>)
  }
}
export default UserDetail;
