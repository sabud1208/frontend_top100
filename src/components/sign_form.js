import React, { Component } from 'react';
import { Button, Checkbox, Container, Form, Segment } from 'semantic-ui-react'


class LoginForm extends Component{
  state = {
      username: "",
      password: ""
    };

    changeHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    submitHandler = e => {
      e.preventDefault();
      this.props.handleUserSubmit(e, this.state);
      this.setState({
        username: "",
        password: ""
      });
    };
    render() {
      return (
        <Container>
        <Form className= "form" onSubmit={this.submitHandler}>
        <Form.Field>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          </Form.Field>
          <Form.Field>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          </Form.Field>

           <Button  basic color= 'purple'  type='submit'>Submit</Button>

          </Form>

        </Container>
      );
    }
  }
export default LoginForm
