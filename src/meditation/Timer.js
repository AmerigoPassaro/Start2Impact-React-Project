import React, { useState, useEffect } from 'react';
import "./assets/css/style.css";
var timer = null;

function FormWatch () {
  // Hook secondi, minuti ed attivazione
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [active, setActive] = useState(true);

  // Funzioni gestione secondi, minuti, presskey e switch
  function handlePressKey(e){ e.preventDefault()};
  // Funzione gestione del tempo
  function Reset(e){
    setSeconds(0)
    setMinutes(0)
  }
  
  // Funzione gestione del tempo
  function handleTimer(e){
    // Interruzione del comportamento default del form
      e.preventDefault();
    // Attivazione hook
      setActive(active => !active);
  }

  useEffect(() => {
    // Gestione timer
    if(active === false){
      clearInterval(timer)
      if(seconds >= 1){
        timer = setInterval(() => setSeconds(seconds - 1), 1000)
      } else if (seconds === 0 && minutes >= 1){
        setSeconds(+seconds + 59)
        setMinutes(minutes - 1)
        timer = setInterval(() => setSeconds(seconds - 1), 1000)
      }
    }
  })

  // Visualizzazione
    return(
      <>
      <div Id="timer-container">
      {String(minutes).padStart(2, '0')}
      :
      {String(seconds).padStart(2, '0')}

      </div>
        <form onSubmit={handleTimer} Id="timer-form" >
          <div className="timer-box">
            {active ? <label className="timer-label" htmlFor="minutes">Minutes</label> : ""}
            {active ? <label className="timer-label" htmlFor="seconds">Seconds</label> : ""}
          </div>
          <div className="timer-box">
            {active ? <input Id="minutes" value={minutes} type="number" className="timer-input" onKeyPress={handlePressKey} onChange={e => setMinutes(e.target.value)} min="0" max="59"/> : ""}
            {active ? <input Id="seconds" value={seconds} type="number" className="timer-input" onKeyPress={handlePressKey} onChange={e => setSeconds(e.target.value)} min="0" max="59"/> : ""}
          </div>
          <input type="submit" Id="timer-button" value={active ? "Start" : "Stop"} />
        </form>
        <button onClick={Reset} type="submit" Id="timer-button">Reset</button>
      </>
    )
}

export default FormWatch;
