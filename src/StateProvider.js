import React, { createContext, useContext, useReducer } from "react";

// data layer here
export const StateContext = createContext();

// wrap the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from data layer
export const useStateValue = () => useContext(StateContext);