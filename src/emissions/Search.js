import React,{useState,useEffect} from "react";
import Result from "./Result"

export default function Search(){

  // Hook Risultato
    const [result, setResult] = useState(false);
  // Funzione di coordinate
    function showResult() {
      setResult(!result)
    }
  // Funzione di prevenzione Form
    function handleSubmit(e) {
        e.preventDefault();
        showResult();
    }
  // Hook Coordinate
    const [coordinates, setCoordinates] = useState(true);
  // Funzione di coordinate
    function useCoordinates(e) {
      setCoordinates(!coordinates)
    }
  // Componente per selezione della locazione
    function Location(){
      if(coordinates){
        return <input type="search" id="place-select" list="place-list"/>
      } else {
        return(
          <div id="container-lon-lat">
            <input className="coordinates-input" placeholder="Longitude 1"/>
            <input className="coordinates-input" placeholder="Latitude 1"/>
            <input className="coordinates-input" placeholder="Longitude 2"/>
            <input className="coordinates-input" placeholder="Latitude 2"/>
          </div>
        ) 
      }
    }
  // Componente per lista di locazioni
    function PlaceList(){
      const [countries,setCountries]=useState([]);
      const getCountry = () =>{
        fetch('https://api.v2.emissions-api.org/api/v2/countries.json')
        .then(function(response){return response.json()})
        .then(function(commits){setCountries(commits)})
      }
      useEffect(()=>{
        getCountry()
      },[])
      return(
        <datalist id="place-list">
        {
          countries && Object.entries(countries).length>=0 && Object.entries(countries).map((country)=><option id="place-selected" key={country.toString()} name={(country.toString()).replace(',', ' (')+')'} value={(country.toString()).replace(',', ' (')+')'}></option>)
        }
        </datalist>
      )
    }

  // Componente di ricerca
    function SearchForm(){
      return(
        <>
          <form id="search-form" onSubmit={handleSubmit}>
            <label className="search-label">{coordinates === true ? "country" : "coordinates"}</label>
            <Location /> 
            <button value={coordinates} type="button" id="change-button" onClick={useCoordinates}>{coordinates === true ? "Use coordinates" : "Use name coutry"}</button>
            <PlaceList />
            <label className="search-label">start date</label>
            <input type="date" id="start-date" className="place-date" />
            <label className="search-label">end date</label>
            <input type="date" id="end-date" className="place-date"/>
            <label className="search-label">methane</label>
            <input type="radio" id="0" name="emissions" value="methane" />
            <label className="search-label">carbonmonoxide</label>
            <input type="radio" id="1" name="emissions" value="carbonmonoxide" />
            <label className="search-label">ozone</label>
            <input type="radio" id="2" name="emissions" value="ozone" />
            <label className="search-label">nitrogendioxide</label>
            <input type="radio" id="3" name="emissions" value="nitrogendioxide" />
            <input type="submit" id="search-button" value="Search" />
          </form>
        </>
      )
    }

    return (
        <>
          {result === true ? <Result /> : <SearchForm />}
        </>
    )
}
