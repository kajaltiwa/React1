import React, { useContext } from "react";
import Child3 from "./Child3";
import { NumberContext } from "./Parent";

export default function Child2() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is Child2 Component</h2>
      <h3>num1 = {state.num1}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment num1</button>
      <button onClick={() => dispatch({ type: "DEC_NUM1" })}>Increment num1</button>
      <h3>num2 = {state.num2}</h3>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Decrement num1</button>
      <hr />
      <Child3 />
    </>
  );
}

// import React from "react";
// import Child3 from "./Child3";

// export default function Child2() {
//   return (
//     <>
//       <h2>This is Child2 Component</h2>
//       <hr />
//       <Child3/>
//     </>
//   );
// }
