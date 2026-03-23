import React, { useState, useTransition } from "react";

export default function UseTransitionHookEx() {
  let [name, setName] = useState("kajal");
  let [input, setInput] = useState("");
  let [ispanding, setIsPending] = useState(false);

  function task() {
    let p1 = new Promise((res, rej) => {
      setTimeout(() => {
        res(true);
        rej(false);
      }, 2000);
    });
    return p1;
  }
  async function postData() {
    setIsPending(true);
    setName(input);
    try {
      await task();
    } catch (error) {
      alert("Internal Server Error");
      setName("kajal");
    }
    setIsPending(false)
  }
  return (
      <>
        <h1>useTransition Hook Example</h1>
        <h1>Name : {name}</h1>
        <input
          type="text"
          name="name"
          onChange={(e) => setInput(e.target.value)}
          placeholder=""
        />
        <button onClick={postData} disabled={ispanding}>
          Submit
        </button>
      </>
    );
    

  //.................OR....................
  // let [name, setName] = useState("kajal");
  // let [input, setInput] = useState("");
  // let [isPending, startTransition] = useTransition();

  // function task() {
  //   let p1 = new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(true);
  //       rej(false);
  //     }, 2000);
  //   });
  //   return p1;
  // }
  // async function postData() {
  //   setName(input);
  //   startTransition(async () => {
  //     try {
  //       await task();
  //     } catch (error) {
  //       alert("Internal Server Error");
  //       setName("kajal");
  //     }
  //   });
  // }
  // return (
  //   <>
  //     <h1>useTransition Hook Example</h1>
  //     <h1>Name : {name}</h1>
  //     <input
  //       type="text"
  //       name="name"
  //       onChange={(e) => setInput(e.target.value)}
  //       placeholder=""
  //     />
  //     <button onClick={postData} disabled={isPending}>
  //       Submit
  //     </button>
  //   </>
  // );
}
