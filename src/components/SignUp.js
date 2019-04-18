import React from 'react'
import { Button, Checkbox, Container, Form, Segment,Link } from 'semantic-ui-react'
class SignUp extends React.Component {
  state= {
    username: '',
    password: '',
    bio: '',
    avatar: ''
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e, userInfo) => {
      e.preventDefault()
      fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
  body: JSON.stringify({ user: userInfo })
})
    .then(r => r.json())
    .then(json => {
      localStorage.setItem('token', json.jwt)
      this.setState({ user: json.user, token: json.jwt, error: json.error}, () => {
        localStorage.setItem("token", json.jwt);
        this.props.history.push("/userprofile");
      })
    })
  }

  render() {

    return (
      <Container>
      
      <Form onSubmit={(e) => this.handleSubmit(e, this.state) }>

   <Form.Field>
    Username:<input type='text' name="username" value= {this.state.username} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
    Password:<input type='text' name="password" value={this.state.password} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
    Bio:<input type='text' name="bio" value={this.state.bio} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
    Avatar:<input type='text' name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
    </Form.Field>

    <div >
     <Button basic color= 'purple'  type='submit'>Submit</Button>
     </div>

    </Form>
  </Container>)
  }
}

export default SignUp
