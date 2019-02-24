import {REGISTER_USER} from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

export function register(user){
  const url = `${ROOT_URL}/user`;
  const request = axios.post(url,user);
  return {
    type: REGISTER_USER,
    payload: request
  }
}