import {LOGGED_IN, LOGGED_OUT, REGISTER_USER} from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/user';

export function signIn(user){
  const url = `${ROOT_URL}/signIn`;
  const request = axios.post(url,user);
  return {
    type: LOGGED_IN,
    payload: request
  }
}

export function register(user){
  const url = `${ROOT_URL}/register`;
  const request = axios.post(url,user);
  return {
    type: REGISTER_USER,
    payload: request
  }
}

export function signOut(){
  return {
    type: LOGGED_OUT
  }
}