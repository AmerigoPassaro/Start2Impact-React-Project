import React from "react"
import Instagram from "./imgs/ig.svg"
import Linkedin from "./imgs/in.svg"
import Github from "./imgs/git.svg"


export default function Info(){
  return (
    <footer>
      <button className="footer-button"><img src={Instagram} className="footer-image"/></button>
      <button className="footer-button"><img src={Linkedin} className="footer-image"/></button>
      <button className="footer-button"><img src={Github} className="footer-image"/></button>
    </footer>

  )
}
