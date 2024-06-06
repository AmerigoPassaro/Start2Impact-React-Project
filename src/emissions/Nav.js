import React, {useState} from "react"

export default function Nav(){
  
  // Hook Header
  const [header, setHeader] = useState(false);
  // Funzione di header
  function gotoHeader() {
    setHeader(!header)
    setSearch(!search)
  }

  // Hook Seacrh
    const [search, setSearch] = useState(true);
  // Funzione di search
    function gotoSearch() {
      setSearch(!search)
      setHeader(!header)
    }
  
  if(header == false){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  }

  return (
    <nav id="nav-section">
        <button id="menuI0" className={header === true ? "menu-item" : "menu-item-active"} onClick={()=>{gotoHeader()}}></button>
        <button id="menuI1" className={search === true ? "menu-item" : "menu-item-active"} onClick={()=>{gotoSearch()}} ></button>
    </nav>
  )
}
