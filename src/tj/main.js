import React from "react"
import Place from "./place"
import places from "./places"
import Location from "./imgs/location.svg"



export default function Main(){

const element = places.map(place => {
  return (
    <div className="place-container">
      <img src={place.imageurl} className="place-img"/>
      <div>
        <div className="place-location">

          <span className="place-city">
            <img src={Location} className="place-icon"/>{place.location}
          </span>

          <a href={place.googlemaps} >
            View on Google Maps
          </a>

        </div>
        <h2>{place.title}</h2>

        <p></p>
        <div className="place-date">{place.startdate} - {place.enddate}</div>
        <p>{place.description}</p>
      </div>
      <hr />
    </div>
    )
  }
)

  return (
    <main>
    {element}
    </main>
  )
}
