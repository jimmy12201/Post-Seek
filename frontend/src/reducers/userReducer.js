import { EMPLOYEE_LOGGED_IN, EMPLOYER_LOGGED_IN, LOGGED_OUT, REGISTER_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/actionTypes.js';

const initialState = {
    employeeLoggedIn: false,
    employerLoggedIn: false,
    userInfo: {}
};

export default function(state = initialState, action) {
    if (action.error) {
      return state;
    }
    console.log(action.type);
    switch(action.type) {
        case EMPLOYEE_LOGGED_IN:
          return {
            employeeLoggedIn: true,
            userInfo: action.payload.data
          };
        case EMPLOYER_LOGGED_IN:
          return {
              employerLoggedIn: true,
              userInfo: action.payload.data
          }
        case LOGGED_OUT:
          return {
            employeeLoggedIn: false,
            employerLoggedIn: false,
            userInfo: {}
          };
        case REGISTER_EMPLOYEE:
          return {
            employeeLoggedIn: true,
            userInfo: action.payload.data
          };
        case UPDATE_EMPLOYEE:
          return {
            employeeLoggedIn: true,
            userInfo: action.payload.data
          };
        default:
          return state;
    }
}