import React from "react"
import Header from "./header"
import FormWatch from "./timer"
import Footer from "./footer"
import "./assets/css/style.css"

class Meditation extends React.Component {

  // Oggetto orologio
  constructor(props){
    super(props);
    //State
    this.state = {
      light: true
    }
    // Metodi
    this.handleMode =  this.handleMode.bind(this);
  }

  // Dichiarazione dei metodi (Cambio mode)
  handleMode(event) {
    this.setState({
      light: !this.state.light,
    })
  }

  // Visualizzazione
  render() {
    return(
      <>
      <header className={this.state.light ? "light-header" : "dark-header"}>
      <Header />
      </header>

      <nav className={this.state.light ? "light-nav" : "dark-nav"}>
        <button onClick={this.handleMode} className="mode-button">
        {this.state.light ? "light" : "dark"}
        </button>
      </nav>

      <main className={this.state.light ? "light-main" : "dark-main"}>
        <div className="container">
          <p clasName="description">Click on <b>Start</b> button to start your meditation</p>
          <FormWatch />
        </div>
      </main>

      <footer className={this.state.light ? "light-footer" : "dark-footer"}>
        <Footer />
      </footer>

      </>
    )
  }
}


export default Meditation;
