import React, { Component } from 'react';


class UserDetail extends Component{


  render(){

    return( <div className="user">
    <div>
      <img src = {this.props.user.avatar} alt = ''/>
    </div>
    <div>
      <h3>Name: {this.props.user.username}</h3>
      <h3>Bio: {this.props.user.bio}</h3>
      <button >Log Out</button>
     </div>

</div>)
  }
}
export default UserDetail;
