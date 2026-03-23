import React from 'react'

export default function Child(props) {
  return (
    <>
      <h2>this is child component</h2>
      <h3>name={props.name}</h3>
      <table border={2} cellPadding={10} cellSpacing={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>class</th>
                <th>dsg</th>
            </tr>
        </thead>
        <tbody>
            
            {
                props.data.map((item,index)=>{
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.class}</td>
                      <td>{item.dsg}</td>
                     
                     
                    </tr>
                })
            }
        </tbody>
      </table>
    </>
  )
}
