import React from "react"
import Avatar from "./img/profile_image.jpg"

export default function Container() {


  const profili = [

    {
      id: 1,
      name: "Giuseppe",
      surname: "Verdi",
      img: "https://shorturl.at/VW489",
      bio: "Prova prova prova prova prova prova prova prova prova prova prova",
      state: {mostra: true},
      cambio: () => (profili.state.mostra = !profili.state.mostra)
    },

    {
      id: 2,
      name: "Mario",
      surname: "Rossi",
      img: "https://shorturl.at/chpv5",
      bio: "Prova prova prova prova prova prova prova prova prova prova prova",
      state: {mostra: true},
      cambio: () => (alert("Ciao"))
    },

    {
      id: 3,
      name: "Anna",
      surname: "Bianchi",
      img: "https://shorturl.at/swCDS",
      bio: "Prova prova prova prova prova prova prova prova prova prova prova",
      state: {mostra: true},
      cambio: () => (alert("Ciao"))
  },

  ]


  const contenitore = profili.map((profilo) =>

    <div className="card">
      <h1>{profilo.name} {profilo.surname}</h1>
      <img src={profilo.img} className="profile-img"/>
      <p>{profilo.state.mostra ? profilo.bio : ""}</p>
      <button onClick={profilo.cambio}>{profilo.state.mostra ? "Nascondi" : "Mostra"}</button>
    </div>
  )

  return(
    <div className="profile-grid">
    {contenitore}
    </div>
  )

}
