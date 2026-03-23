import React from "react";
import Child from "./Child";

export default function Parent() {
  let data = [
    { id: 101, name: "kajal", class: "mca", dsg: "student" },
    { id: 102, name: "smriti", class: "bed", dsg: "student" },
    { id: 101, name: "amita", class: "btc", dsg: "student" },
  ];

  return (
    <div>
      <>
        <h2>this is Parent component</h2>
        <hr />
        <Child name="kajal" data={data} />
      </>
    </div>
  );
}
