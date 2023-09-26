import React from "react"
import Troll from "./imgs/troll.svg"

export default function Header(){
  return (
    <header>
    <img src={Troll} className="logo"/><h1>MemeGenerator</h1>
    </header>
  )
}
