import React, { Component } from 'react'
import Child from './Child'


export default class Parent extends Component {
  constructor(){
    super()
   this.state={
    num1:1,
    num2:1
   }
  }
  increment1(){
    this.setState({ num1: this.state.num1+1})
  }
  increment2(){
    this.setState({ num2: this.state.num2+1})
  }
  render() {
    console.log("parent component is renderes")
    return (
      <>
      <h1>shouldComponentUpdate vs PureComponent example</h1>
      <h2> parent component </h2>
      <h3>num1 = {this.state.num1} | num2 = {this.state.num2}</h3>
      <button onClick={()=>this.increment1()}>Increment num1</button>
      <button onClick={()=>this.increment2()}>Increment num2</button>
      <hr />
      <Child num1={this.state.num1} num2={this.state.num2}/>
      </>
    )
  }
}
