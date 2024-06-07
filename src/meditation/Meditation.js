import React, {useState} from "react"
import Header from "./Header"
import FormWatch from "./Timer"
import Footer from "./Footer"
import "./assets/css/style.css"

function Meditation() {

  // Hook orologio
  const [mode, setMode] = useState(true);
  // Funzione di switch
  function switchMode() {
    setMode(!mode)
  }

  // Visualizzazione
  return(
    <>
      <header className={mode ? "light-header" : "dark-header"}>
        <Header />
      </header>

      <nav className={mode ? "light-nav" : "dark-nav"}>
        <button onClick={()=>{switchMode()}} className="mode-button">
          {mode === true ? "light" : "dark"}
        </button>
      </nav>

      <main className={mode ? "light-main" : "dark-main"}>
        <div className="container">
          <p>Click on <b>Start</b> button to start your meditation</p>
          <FormWatch />
        </div>
      </main>

      <footer className={mode ? "light-footer" : "dark-footer"}>
        <Footer />
      </footer>
    </>
  )
}


export default Meditation;
