import React, { useContext } from "react";
import Child2 from "./Child2";
import { NumberContext } from "./Parent";

export default function Child1() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is Child1 Component</h2>
      <h3>num1 = {state.num1}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment num1</button>
      <button onClick={() => dispatch({ type: "DEC_NUM1" })}>Increment num1</button>
      <h3>num2 = {state.num2}</h3>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Decrement num1</button>
      <hr />
      <Child2 />
    </>
  );
}

// import React from 'react'
// import Child2 from './Child2'

// export default function Child1() {
//   return (
//     <>
//       <h2>This is Child1 Component</h2>
//       <hr />
//             <Child2/>
//     </>
//   )
// }
