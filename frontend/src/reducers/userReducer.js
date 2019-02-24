import { LOGGED_IN, LOGGED_OUT, REGISTER_USER } from '../actions/actionTypes.js';

const initialState = {
    loggedIn: false,
    userInfo: {}
};

const initialStateLoggedIn = {
  loggedIn: true,
  userInfo: {name: 'William'}
};

export default function(state = initialStateLoggedIn, action) {
    switch(action.type){
        case LOGGED_IN:
          if(action.error){
            return state;
          }
          return {
            loggedIn: true,
            userInfo: action.payload.data
          };
        case LOGGED_OUT:
          return {
            loggedIn: false,
            userInfo: {}
          };
        case REGISTER_USER:
          if(action.error){
            return state;
          }
          return {
            loggedIn: true,
            userInfo: action.payload.data
          };
        default:
          return state;
    }
};