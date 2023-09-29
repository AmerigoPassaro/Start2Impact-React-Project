import React from "react";
import "./assets/css/style.css";


class FormWatch extends React.Component {

  // Oggetto orologio
  constructor(props){
    super(props);
    //State
    this.state = {
      seconds: 0,
      minutes: 0,
      active: true,
    }
    // Metodi
    this.handleChangeM = this.handleChangeM.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Dichiarazione dei metodi (Changeper i minuti)
  handleChangeM(event) {
    this.setState({
      minutes: event.target.value
    })
  }
  // Dichiarazione dei metodi (Changeper i secondi)
  handleChangeS(event) {
    this.setState({
      seconds: event.target.value
    })
  }
  // Interruzione del comportamento default dell'input
  handleKeyPress(event) {
    event.preventDefault()
  }


  // Dichiarazione dei metodi (Subtmit)
  handleSubmit(event) {
    clearInterval(timer);
    // Cambio state del timer
    this.setState({
      active: !this.state.active,
    })
    // Gestione dei secondi
    let timer = setInterval(() => {
      if(this.state.active === false){

        if(this.state.seconds >= 1){
          this.setState({
            seconds: +this.state.seconds -1
          })
        } else if(this.state.seconds === 0 && this.state.minutes !== 0) {
          this.setState({
            seconds: +this.state.seconds +59,
            minutes: +this.state.minutes -1
          })
        }
      } else {
        clearInterval(timer)
      }

    }, 1000)

    // Interruzione del comportamento default del form
    event.preventDefault()
  }

  // Visualizzazione
  render() {
    return(
      <>
      <div Id="timer-container">
      {String(this.state.minutes).padStart(2, '0')}
      :
      {String(this.state.seconds).padStart(2, '0')}

      </div>
        <form onSubmit={this.handleSubmit} Id="timer-form" >
          <div className="timer-box">
            {this.state.active ? <label className="timer-label" for="minutes">Minutes</label> : ""}
            {this.state.active ? <label className="timer-label" for="seconds">Seconds</label> : ""}
          </div>
          <div className="timer-box">
            {this.state.active ? <input Id="minutes" value={this.state.minutes} type="number" className="timer-input" onKeyPress={this.handleKeyPress} onChange={this.handleChangeM} min="0" max="59"/> : ""}
            {this.state.active ? <input Id="seconds" value={this.state.seconds} type="number" className="timer-input" onKeyPress={this.handleKeyPress} onChange={this.handleChangeS} min="0" max="59"/> : ""}
          </div>
          <input type="submit" Id="timer-button" value={this.state.active ? "Start" : "Stop"} />
        </form>
      </>
    )
  }
}

export default FormWatch;
