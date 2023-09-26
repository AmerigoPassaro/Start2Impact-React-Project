import React from "react"

export default function Main(){

// A1: Dichiariamo una funzione
// A2: Inseriamo come argomento della funzione
// A3: Ritorniamo una stringa HTML e all'interno un elemnto React proveniente da props
// A4: Visualizziamo la componente con il rispettivo attributo alias elemento React
function First(props){
  return <p>Hello {props.nome}</p>
}

// B1: Dichiariamo una classe che è un estensione di React.component
// B2: Creiamo il metodo render
// B3: Il metodo rendere deve ritornare la stringa HTML più elemento react
// B4: Visualizziamo la componente con il rispettivo attributo alias elemento React
class Second extends React.Component{
  render(){
    return <p>Hello {this.props.nome}</p>
  }
}

// C1: Dichiariamo una funzione
// C2: Dichiariamo un oggetto all'interno della funzione
// C3: Ritorniamo la componente con i relativi elementi derivati dall'oggetto
// C4: Visualizziamo la compoennte con i relativi dati estrapolati dall'oggetto
function Comment(props){

  const firstComment = {
    id: new Date().toLocaleTimeString(),
    text: "Hello there!",
    author: {
      name: "Giorgio Amico",
      avatarUrl: "https://apidyn.royalsociety.org/images/fellows/P48983-Juergen-Maier.jpg"
    }
  }

  return(
    <div className="comment">
      <img className="avatar" src={firstComment.author.avatarUrl} />
      <div>
        <p><b>{firstComment.author.name}</b></p>
        <p>{firstComment.text}</p>
        <p>{firstComment.id}</p>
      </div>
    </div>
  )


}

  return (
    <div>
      <First nome="Marco" />
      <First nome="Maria" />
      <Second nome="Giorgio" />
      <Second nome="Linda" />
      <Comment />
    </div>
  )
}
