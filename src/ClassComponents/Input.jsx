import React, { Component } from 'react'

export default class Input extends Component {
  constructor(){
    super()
    this.state = {
      name:""
    }
  }
  getInputData(e){
    this.setState({name:e.target.value})
  }
  postSubmit(){
    alert(`
      hello ${this.state.name}
      `)
  }
  render() {
    return (
       <>
       <div className="main">
        <div className="center">
            <h2>Class Component input example</h2>
            <h2>name : {this.state.name}</h2>
            <input type="text" name='name' onChange={(e)=>this.getInputData(e)} placeholder='Full Name' />
            <button onClick={()=>this.postSubmit()}>Submit</button>
        </div>
       </div>
       </>
    )
  }
}
