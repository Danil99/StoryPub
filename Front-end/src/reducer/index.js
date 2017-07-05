import { LOGIN_ERROR, GET_POSTS, INCREMENT, ADD_COMMENT, DELETE_COMMENT } from '../action'

function reducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.state

    case INCREMENT:
      return {...state, likes: action.likes}

    case ADD_COMMENT:
      return {...state, commentsList: action.comment}

    case DELETE_COMMENT:
      return {...state, commentsList: action.comment}

    case LOGIN_ERROR:
      let newLog = {...state};
      newLog.loginError = action.loginError;
      return newLog;

    default:
      return state;
  }
}

export default reducer;
