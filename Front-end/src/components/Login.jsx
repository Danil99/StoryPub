import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username && password !== '') {
      axios.post('http://localhost:8080/login', {username, password})
        .then(res => res.data)
        .then(res => {
          if(res !== 'error') {
            localStorage.setItem('jwtToken', res);
            window.location.href = "/";
            // this.props.history.push('/');
          } else !this.props.logForm ? this.props.loginError(this.props.logForm) : false;
        })
    }
  }

  render() {
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="username" type="text" name="name" placeholder="Username" />
          <input ref="password" type="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
        {
          this.props.logForm ? <span>Invalid username and password</span> : false
        }
      </section>
    )
  }
}

export default Login;
