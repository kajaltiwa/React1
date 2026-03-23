import React, { useContext } from "react";
import Child4 from "./Child4";
import { NumberContext } from "./Parent";

export default function Child3() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is Child3 Component</h2>
      <h3>num1 = {state.num1}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment num1</button>
      <button onClick={() => dispatch({ type: "DEC_NUM1" })}>Increment num1</button>
      <h3>num2 = {state.num2}</h3>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "DEC_NUM2"})}>Decrement num1</button>
      <hr />
      <Child4 />
    </>
  );
}

// import React, { useContext } from "react";
// import Child4 from "./Child4";

// import { DesignationContext, NameContext, SalaryContext } from "./Parent";

// export default function Child3() {
//     let name = useContext(NameContext)
//     let salary = useContext(SalaryContext)
//     let designation = useContext(DesignationContext)
//   return (
//     <>
//       <h2>This is Child3 Component</h2>
//       <h3>Name : {name}</h3>
//       <h3>Salary : {salary}</h3>
//       <h3>Designation : {designation}</h3>
//       <hr />
//       <Child4/>
//     </>
//   );
// }
