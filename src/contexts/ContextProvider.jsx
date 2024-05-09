// In ContextProvider.jsx

import React, { useReducer } from 'react';
import UserContext from './UserContext';

function reducer(state, action) {
  switch (action.job) {
    case 'add':
      const id = Date.now();
      const newData = { id, ...action.data };
      return [...state, newData];
    case 'delete':
      return state.filter(user => user.id !== action.data); 
      case 'update':
        return state.map(user => {
          if (user.id === action.data.id) {
            return { ...user, ...action.data };
          }
          return user;
        });
    default:
      return state;
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
