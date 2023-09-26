import React from "react"

export default function Main(){

  const list = ["id", "nome", "cognome"]
  const orderList = list.map((elemento) => <li>{elemento}</li>)
  function addElement(){
    list.push(1);
    alert(list);
  }


  return(
    <main>
      <h2>List</h2>
      <ul>
        {orderList}
      </ul>
      <h2>Add list item</h2>
      <input></input>
      <button onClick={addElement}>Send</button>
    </main>
  )
}
