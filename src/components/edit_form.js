import React, {Component} from 'react';

class EditForm extends Component {
  state = {
    newName: "",
    newBio: "",
    newAvatar: ""
  }

  handleEditOnChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div>
        <p>Name: <input type="text" value={this.state.newName} name= "newName" onChange={this.handleEditOnChange} /> </p>
        <p>Bio: <input type="text" value={this.state.newBio} name= "newBio" onChange={this.handleEditOnChange} /> </p>
        <p>Avatar: <input type="text" value={this.state.newAvatar}  name= "newAvatar" onChange={this.handleEditOnChange} /> </p>
        <button onClick={() => this.props.handleSubmitButtonClick(this.state)}>Submit</button>
      </div>
    )
  }
}

export default EditForm
