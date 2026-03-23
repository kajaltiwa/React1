import React, { useContext } from "react";
import Child5 from "./Child5";
import { NumberContext } from "./Parent";

export default function Child4() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is Child4 Component</h2>
      <h3>num1 = {state.num1}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment num1</button>
      <button onClick={() => dispatch({ type: "DEC_NUM1" })}>Increment num1</button>
      <h3>num2 = {state.num2}</h3>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Decrement num1</button>
      <hr />
      <Child5 />
    </>
  );
}

// import React from "react";
// import Child5 from "./Child5";

// export default function Child4() {
//   return (
//     <>
//       <h2>This is Child4 Component</h2>
//       <hr />
//       <Child5/>
//     </>
//   );
// }
