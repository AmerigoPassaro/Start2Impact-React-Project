import React from "react"
import memesData from "./memes"

export default function Main(){

  // Questo è uno state e viene identificato da due parametri destrutturati
  // Il primo memorizza il valore
  // Il secondo serve per poterlo alterare
  // La destrutturazione accede alla classe React e al metodo useState
  // const [memeImage, setMemeImage] = React.useState("")

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://shorturl.at/jsCU7"
  })

  const [allMemeImages, setAllMemeImages] =  React.useState(memesData)

  function getImage(){
    // Dichiariamo un array che accede al file memes, dove sono memorizzati
    // tutti i dati
    const memesArray = allMemeImages.data.memes
    // Dichiariamo una funzione che seleziona casualmente un elmento dall'array
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // Dall'elemento casuale estrapoliamo il campo url e lo salviamo nello state
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div>
      <div className="input-grid">
        <input type="text"
        className="input-meme"
        placeholder="Top"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />
        <input type="text"
        className="input-meme"
        placeholder="Bottom"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
      </div>
      <button
        className="submit-meme"
        onClick={getImage}
      >
        Get new meme image 🖼
      </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="image-meme"/>
        <h2 className="meme-top-text">{meme.topText}</h2>
        <h2 className="meme-bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
