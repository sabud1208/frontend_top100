import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class UserDetail extends Component{

state={
  logout: false
}
onClick=(e, obj)=>{
  console.log(obj);
  let logout = this.state.logout = !this.state.logout
   this.setState({logout: logout}, ()=> {
     localStorage.clear()
     this.props.history.push('/')
   })


}

  render(){

    return( <div className="user">
    <div>
      <img src = {this.props.user.avatar} alt = ''/>
    </div>
    <div>
      <h3>Name: {this.props.user.username}</h3>
      <h3>Bio: {this.props.user.bio}</h3>
      <button onClick={(e)=>this.onClick(e, this.props.user)}>Log Out</button>
      <button onClick={this.props.handleEditButton}>Edit</button>
     </div>

</div>)
  }
}
export default withRouter(UserDetail);
