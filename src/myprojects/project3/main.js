import React from "react"

export default function Main(){

  class FirstState extends React.Component {


      constructor(props) {
        super(props);
        this.name = "Amerigo";
        this.age = 28;
      }



    render() {
      return (
        <div>
          <h1>Terzo progetto</h1>
          <p>{this.name} ha {this.age} anni.</p>
        </div>
      )
    }
  }


  return (
    <div>
    <FirstState />
    </div>
  )

}
