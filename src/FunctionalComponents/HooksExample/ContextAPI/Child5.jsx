import React, { useContext } from "react";
import { NumberContext } from "./Parent";

export default function Child5() {
  let { state, dispatch } = useContext(NumberContext);
  return (
    <>
      <h2>This is Child5 Component</h2>
      <h3>num1 = {state.num1}</h3>
      <button onClick={() => dispatch({ type: "INC_NUM1" })}>Increment num1</button>
      <button onClick={() => dispatch({ type: "DEC_NUM1" })}>Increment num1</button>
      <h3>num2 = {state.num2}</h3>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Increment num1</button>
      <button onClick={() => dispatch({type: "INC_NUM2"})}>Decrement num1</button>
      
    </>
  );
}

// import React from "react";
// import { DesignationContext, NameContext, SalaryContext } from "./Parent";


// export default function Child5() {
//   return (
//     <>
//       <h2>This is Child5 Component</h2>
//       <NameContext.Consumer>
//         {(value)=>{
//             return <h3>Name : {value}</h3>
//         }}
//       </NameContext.Consumer>
//       <SalaryContext.Consumer>
//       {(value)=>{
//             return <h3>Salary : {value}</h3>
//         }}
//       </SalaryContext.Consumer>
//       <DesignationContext.Consumer>
//       {(value)=>{
//             return <h3>Designation : {value}</h3>
//         }}
//       </DesignationContext.Consumer>
//     </>
//   );
// }
