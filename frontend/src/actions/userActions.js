import {EMPLOYEE_LOGGED_IN, EMPLOYER_LOGGED_IN, LOGGED_OUT, REGISTER_EMPLOYEE, UPDATE_EMPLOYEE} from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/user';

export function signInEmployee(user){
  const url = `${ROOT_URL}/signInEmployee`;
  const request = axios.post(url,user);
  return {
    type: EMPLOYEE_LOGGED_IN,
    payload: request
  };
}

export function signInEmployer(user){
  const url = `${ROOT_URL}/signInEmployer`;
  const request = axios.post(url,user);
  return {
    type: EMPLOYER_LOGGED_IN,
    payload: request
  };
}

export function register(user){
  const url = `${ROOT_URL}/register`;
  const request = axios.post(url,user);
  return {
    type: REGISTER_EMPLOYEE,
    payload: request
  };
}

export function registerEmployer(user){
  const url = `${ROOT_URL}/registerEmployer`;
  const request = axios.post(url,user);
  return {
    type: EMPLOYER_LOGGED_IN,
    payload: request
  };
}

export function update(user){
  const url = `${ROOT_URL}/update`;
  const request = axios.put(url,user);
  return {
    type: UPDATE_EMPLOYEE,
    payload: request
  };
}

export function signOut(){
  return {
    type: LOGGED_OUT
  };
}