import React, { createContext, useReducer } from 'react'
import RegisterForm from '../../component/RegisterForm';

/* 
  создать обьект состояния
  и функцию редюсер
  setUser,
  increment,
  nextSlide,
*/
const initialState = { user: null };
function reducer (state, action) {

  if (action.type === 'setUser') {
    return { ...state, user: action.payload };
  }

  return state;
}

// store - reducer + state obj,
// connect method - useReducer + context

export const Context = createContext();

function RegisterPage() {
  const state = useReducer(reducer, initialState);

  return (
    <Context.Provider value={state}> 
        <h2>Register your new account</h2>
        <RegisterForm />
    </Context.Provider>
  );
}

export default RegisterPage;
