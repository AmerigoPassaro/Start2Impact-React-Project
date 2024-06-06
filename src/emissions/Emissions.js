import * as React from "react";
import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"


import "./assets/css/style.css"
import "./assets/css/chart.css"
import "./assets/css/header.css"
import "./assets/css/menu.css"
import "./assets/css/responsive.css"
import "./assets/css/search.css"


function Emissions() {
  
  // Visualizzazione
  return(
    <>
      <Header />
      <Nav />
      <Main />
    </>
  )
}


export default Emissions;
