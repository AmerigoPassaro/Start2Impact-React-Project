import React from "react"
import About from "./about"
import Info from "./info"
import Interests from "./interests"
import Footer from "./footer"

export default function DigBusCar(){
  return (
    <div className="card">
    <Info />
    <About />
    <Interests />
    <Footer />
    </div>
  )
}
