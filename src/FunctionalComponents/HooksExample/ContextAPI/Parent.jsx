import React, { createContext, useReducer } from "react";
import Child1 from "./Child1";
import Reducer from "./Reducer";

export const NumberContext = createContext();

export default function Parent() {
  let[state, dispatch] = useReducer(Reducer, {num1: 1,num2: 1})
  return (
    <>
      <h1>This is Parent Component</h1>
      <h2>this is a parent component</h2>
      <h3>num1 = {state.num1}</h3>
      <button onClick={() => dispatch({type: "INC_NUM1"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "DEC_NUM1"})}>Decrement num1</button>
      <h3>num2 = {state.num2}</h3>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "DEC_NUM2"})}>Decrement num1</button>
      <hr />
      <NumberContext.Provider value={{ state, dispatch }}>
            <Child1 />
      </NumberContext.Provider>
    </>
  );
}


