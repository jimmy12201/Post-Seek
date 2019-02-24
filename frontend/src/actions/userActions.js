import {LOGGED_IN, LOGGED_OUT} from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

export function signIn(user){
  const url = `${ROOT_URL}/signIn`;
  const request = axios.post(url,user);
  return {
    type: LOGGED_IN,
    payload: request
  }
};