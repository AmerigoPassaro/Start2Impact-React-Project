import React from "react"
import Avatar from "./imgs/avatar.jpg"
import Email from "./imgs/mail.svg"


export default function Info(){
  return (
    <header>
    <img src={Avatar} className="avatar" />
    <h1>Amerigo Passaro</h1>
    <h2>Frontend Developer</h2>
    <h3>
      <a href="https://www.amerigopassaro.it/">amerigopassaro.it</a>
    </h3>
    <div className="social-grid">
      <button className="social-button">Linkedin</button>
      <button className="social-button"><img src={Email} className="social-image" />Email</button>
    </div>
    </header>

  )
}
