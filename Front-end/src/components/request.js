import axios from 'axios';

let server = 'http://localhost:8080';
let token = localStorage.jwtToken;

export function verify() {
  return axios.post(`${server}/verify`, {token})
    .then(res => res.data)
}

export function searchQuery(val) {
  return axios.post(`${server}/searchQuery`, {token, searchValue: val})
    .then(res => res.data)
}

export function userData(val) {
  return axios.post(`${server}/userData`, {token, userName: val})
    .then(res => res.data)
}

export function deleteOrAddFriends(action, username) {
  return axios.patch(`${server}/deleteOrAddFriends`, {token, username, action})
    .then(res => res.data)
}

export function incrementLike(id) {
  return axios.patch(`${server}/incrementLike`, {token, id})
    .then(res => res.data)
}

export function onAddComment(comment, id) {
  return axios.put(`${server}/onAddComment`, {token, comment, id})
    .then(res => res.data)
}

export function onDeleteComment(id, i) {
  return axios.put(`${server}/onDeleteComment`, {token, id, i})
    .then(res => res.data)
}

export function onAddPost(file) {
  return axios.post(`${server}/addPost`, file)
    .then(res => res.data)
}
