import React from "react"

export default function Container(){

  function Heading1(){
    return(
      <>
      Il mio dato
      </>
    );
  }

  function Heading2(){
    return(
      <>
      Il mio non dato
      </>
    );
  }


  class MyBox extends React.Component{
    constructor(props){
      super(props);
      this.state = {prova: true};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
      this.setState (prevState => ({
        prova: !prevState.prova
      }))
    }

    render() {
      return (
        <div>
        <p>{this.state.prova ? <Heading1 /> : <Heading2 />}</p>
        <button onClick={this.handleChange}>{this.state.prova ? "1" : "2"}</button>
        </div>
      )
    }

  }


  return (<MyBox />)

}
