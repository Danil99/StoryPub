import { connect } from 'react-redux';

import Login from '../components/Login';

import { loginError } from '../action';

function mapStateToProps(state) {
  return {
    logForm: state.loginError || false
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginError: val => dispatch(loginError(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
