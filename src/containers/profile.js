import React, { Component } from 'react';
import UserDetail from '../components/user_detail'
import UserList from '../components/user_list'
import EditForm from '../components/edit_form'
class Profile extends Component{
  state={
    user: {},
      logout: false,
       showEditForm: false,
       edit: null
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
      .then(userData => this.setState({user: userData.user}),
        )
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
  onClickLogout=(e, obj)=>{
let logout = this.state.logout ? true : false
    if(this.state.logout){
      return  this.setState({user: null,logout: logout}) , ()=> {
        localStorage.clear()
    }
  }
}

handleEditButton = () => {
   this.setState({
     showEditForm: !this.state.showEditForm
   })
 }


 handleSubmitButtonClick = (info) => {

   console.log(info);
   const newUser = {
     id:info.id,
     username: info.newName,
     bio: info.newBio,
     avatar: info.newAvatar
}
let userr = {...this.state.user}
userr.user = newUser
  this.setState({
      showEditForm: !this.state.showEditForm,
      user: userr
    })
}


render(){
  let user = <UserDetail user = {this.state.user}   onClickLogout= {this.onClickLogout}  handleEditButton = {this.handleEditButton}/>
  let edit = <EditForm handleSubmitButtonClick = {this.handleSubmitButtonClick}/>
    return (
    <React.Fragment>

      { this.state.showEditForm ?  <div className="profile-user-container">{edit}</div> : <div className="profile-user-container">{user}</div>}

     <div className="profile-container">
     {this.state.user.favorites ? < UserList favor= {this.state.user.favorites} user = {this.state.user}  onClick={this.onClick}/> : null}
    </div>
         </React.Fragment>)
  }
}
export default Profile;
