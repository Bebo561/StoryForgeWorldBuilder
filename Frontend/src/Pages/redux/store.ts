// store.js
import { createStore } from 'redux';

const initialState = {
  token: localStorage.getItem('jwtToken') || null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'CLEAR_TOKEN':
      return { ...state, token: null };
    default:
      return state;
  }
}

const store = createStore(authReducer);

export default store;
