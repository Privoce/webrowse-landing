/**
 * @author: laoona
 * @date:  2022-01-28
 * @time: 14:04
 * @contact: laoona.com
 * @description: #
 */

import React, { createContext, useReducer } from 'react';

const initValue = {
  user: {},
}

export const UPDATE_USER = "UPDATE_USER";

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export const PassportContext = createContext(initValue);

const Passport =  props => {
  const [state, dispatch] = useReducer(reducer, initValue, val => val);

  return (<PassportContext.Provider value={{state, dispatch}}>
      {props.children}
    </PassportContext.Provider>)
}

export default Passport;
