import React from "react"

export default function Main(){

// A1: Creiamo una varaibile
// A2: Visualizziamo il messaggio più la variabile
const name = "Amerigo"


// B1: Creiamo un oggetto
// B2: Uniamo gli elementi dell'oggetto in una funzione
// B3: Visualizziamo il messaggio più la funzione (composta)
const user = {
  firstName: "Luca",
  lastName: "Rossi"
}
function completeUSer(user){
    return user.firstName + " " + user.lastName
}


// C1: Creiamo una variabile
// C2: Creiamo una funzione con argomento la variabile
// C3: Creiamo una selezione: Vero saluta l'ospite; Falso saluto generico
// C4: Visualizziamo la funzione condizionale
const guest = "Mario"
function getGreeting(guest){
  if (guest){
    return <p>Hello {guest}</p>
  }
  return <p>Hello guest</p>
}


// D1: Creiamo una variabile che contenga url
// D2: Creiamo un tag img
// D3: Inseriamo come attributo src la variabile
const url = "https://logospng.org/download/fiat/logo-fiat-256.png"


// E1: Creiamo una variabile
// E2: Inseriamo nella variabile il comando React.createElement
// E3: Inseriamo come primo argomento il tag
// E4: Inseriamo come secondo argomento in parentesi grasse, il className
// E5: Inseriamo come terzo argomento il contneuto del tag
// E6: Visuyalizziamo l'elemento react
const element = React.createElement (
 "p",
 {className: ""},
 "Hello Italy"
)

  return (
    <div>
    <h1>Hello Wolrd</h1>
    <p>Hello {name}</p>
    <p>Hello {completeUSer(user)}</p>
    {getGreeting(guest)}
    <img className="icon" src={url}></img>
    {element}
    </div>
  )
}
