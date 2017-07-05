export const GET_POSTS = 'GET_POSTS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const INCREMENT = 'INCREMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

import { verify, incrementLike, onAddComment, onDeleteComment } from '../components/request';

export function getPosts() {
  return verify().then(res => {
      if(res !== 'The token is not verify') {
        return ({
          type: GET_POSTS,
          state: res
        })
      } else {
        localStorage.removeItem('jwtToken');
        window.location.href = "/";
      }
    })
}

export function loginError(val) {
  return {
    type: LOGIN_ERROR,
    loginError: !val
  }
}

export function increment(id) {
  return incrementLike(id)
    .then(res => {
      if(res !== 'The token is not verify') {
        return ({
          type: INCREMENT,
          likes: res.likes
        })
      } else {
        localStorage.removeItem('jwtToken');
        window.location.href = "/";
      }
    })
}

export function addComment(comment, id) {
  return onAddComment(comment, id)
    .then(res => {
      if(res !== 'The token is not verify') {
        return ({
          type: ADD_COMMENT,
          comment: res.comment
        })
      } else {
        localStorage.removeItem('jwtToken');
        window.location.href = "/";
      }
    })
}

export function deleteComment(id, i) {
  return onDeleteComment(id, i)
  .then(res => {
    if(res !== 'The token is not verify') {
      return ({
        type: DELETE_COMMENT,
        comment: res.comment
      })
    } else {
      localStorage.removeItem('jwtToken');
      window.location.href = "/";
    }
  })
}
