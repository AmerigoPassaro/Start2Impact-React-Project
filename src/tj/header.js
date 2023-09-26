import React from "react"
import Logo from "./imgs/logo.svg"

export default function Header(){
  return (
    <header>
    <img src={Logo} className="logo"/><h1>my travel journal</h1>
    </header>
  )
}
