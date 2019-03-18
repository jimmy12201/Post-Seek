import { LOGGED_IN, LOGGED_OUT, REGISTER_USER, UPDATE_USER } from '../actions/actionTypes.js';

const initialState = {
    loggedIn: false,
    userInfo: {}
};

export default function(state = initialState, action) {
    switch(action.type){
        case LOGGED_IN:
          if(action.error){
            return state;
          }
          console.log(action.payload.data);
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
        case UPDATE_USER:
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
}