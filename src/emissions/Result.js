import React,{useState,useEffect} from "react";
import Search from "./Search"
import coordinates from "./Search"

export default function Result(){

  // Elementi dinamici della dashboard
    const valueChange = document.querySelector('#change-button').value
    const [title, setTitle] = useState((valueChange === 'true') ? document.querySelector('#place-select').value : `Coordinates: ${document.querySelectorAll('.coordinates-input')[0].value}, ${document.querySelectorAll('.coordinates-input')[1].value}, ${document.querySelectorAll('.coordinates-input')[2].value}, ${document.querySelectorAll('.coordinates-input')[3].value}`)
    const [emission, setEmission] = useState(document.querySelector('input[name="emissions"]:checked').value)
    const [idEmission, setIdEmission] = useState(document.querySelector('input[name="emissions"]:checked').id)
    const [nation, setNation] = useState((valueChange === 'true') ? document.querySelector('#place-select').value.match(/([^\s]+)/)[1] : 
    [document.querySelectorAll('.coordinates-input')[0].value, document.querySelectorAll('.coordinates-input')[1].value, document.querySelectorAll('.coordinates-input')[2].value, document.querySelectorAll('.coordinates-input')[3].value])
    const [startDate, setStartDate] = useState(document.querySelector('#start-date').value)
    const [endDate, setEndDate] = useState(document.querySelector('#end-date').value)
    var newArr = [startDate]
    var newArrD = []
    var newArrY = []
    var linkR = ''
    var maxValue

    const link = (valueChange === 'true') ? `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?country=${nation}&begin=${startDate}&end=${endDate}&limit=1&offset=0` : 
    `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?geoframe=${nation[0]}&geoframe=${nation[1]}&geoframe=${nation[2]}&geoframe=${nation[3]}&begin=${startDate}&end=${endDate}&limit=100&offset=0`;
      
  // Componente per media emissione
    function AverageEmissions(){
      const [myAverage,setAverage]=useState([]);
      const getAverage = () =>{
        fetch(link)
        .then(function(response){return response.json()})
        .then(function(commits){setAverage(commits[0])})
      }
      useEffect(()=>{
        getAverage()
      },[])

      return(
        <span>
        {
          myAverage.average
        }
        </span>
      )
    }
  // Componente per descrizione emissione
    function DescriptionEmissions(){
      const [emissions,setEmissions]=useState([]);
      const getEmissions = () =>{
        fetch('https://api.v2.emissions-api.org/api/v2/products.json')
        .then(function(response){return response.json()})
        .then(function(commits){setEmissions(commits[idEmission])})
      }
      useEffect(()=>{
        getEmissions()
      },[])

      return(
        <p>
        {
          emissions.description
        }
        </p>
      )
    }

  // Componente Grafico
    function Chart(){

      var month = '';
      var year = '';
      for(let i = 0; i <= 4; i++){
        month = (Number(newArr[i].substr(5, 2)-i) <= 1) ? 11 + (Number(newArr[i].substr(5, 2))-i) : Number(newArr[i].substr(5, 2))-(i+1);
        year = (Number(newArr[i].substr(5, 2)-i) > 1) ? Number(newArr[i].substr(0, 4)) : Number(newArr[i].substr(0, 4))-1;
        month = month.toString();
        month = month.padStart(2, '0');
        var newDate = newArr[i].replace(/[-][0-9][0-9][-]/g, `-${month}-`);
        newDate = newDate.replace(/[0-9][0-9][0-9][0-9][-]/g, `${year}-`);
        newArr.unshift(newDate);
      }

      // Componente Date
        function Dates(){
          const [dates, setDates]=useState([])
          const getDates = () =>{
            setDates([... newArr]);
          }
          useEffect(()=>{
            getDates()
          },[])
          return(
            <>
            {
              dates && Object.values(dates).length>=0 && Object.values(dates).map((date)=><div key={date.toString()} className="date">{date}</div>)
            }
            </>
          )
        }

      // Componente Rettangle
        function Rettangles(){
          const [rettangles, setRettangles]=useState([])
          const getRettangle = () =>{
            for(let i= 0; i <= 5; i++){
              if(i === 0){
                linkR = (valueChange === 'true') ? `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?country=${nation}&begin=${startDate}&end=${endDate}&limit=1&offset=0` : `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?geoframe=${nation[0]}&geoframe=${nation[1]}&geoframe=${nation[2]}&geoframe=${nation[3]}&begin=${startDate}&end=${endDate}&limit=100&offset=0`;
              } else {
                linkR = (valueChange === 'true') ? `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?country=${nation}&begin=${newArr[5-i]}&end=${newArr[6-i]}&limit=1&offset=0` : `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?geoframe=${nation[0]}&geoframe=${nation[1]}&geoframe=${nation[2]}&geoframe=${nation[3]}&begin=${newArr[5-i]}&end=${newArr[6-i]}&limit=100&offset=0`;
              }
              fetch(linkR)
              .then(function(response){return response.json()})
              .then(function(commits){newArrD.push(commits[0].average); setRettangles([... newArrD])})
            }
          }
          useEffect(()=>{
            getRettangle()
          },[])
          return(
            rettangles 
            && Object.values(rettangles).length>=0 
            && Object.values(rettangles).map(
              (rettangle, indRet)=> 
            <div key={indRet} className="container-rettangle">
              <div key={rettangle.toString()} className="emission" style={{
                height: (rettangle > 1) ? (Math.trunc(rettangle)/10) : 
                (rettangle > 0.1) ? Math.trunc((rettangle) * 1500) : 
                (rettangle > 0.01) ? Math.trunc((rettangle) * 5000) : Math.trunc((rettangle) * 5000000)
                }}>
                </div>
              </div>
              )
          )
        }

        // Componente Asse Y
          function YAxis(){

            const [y, setY]=useState([])
            const getY = () =>{
              for(let i= 0; i <= 5; i++){
                if(i === 0){
                  linkR = (valueChange === 'true') ? `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?country=${nation}&begin=${startDate}&end=${endDate}&limit=1&offset=0` : `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?geoframe=${nation[0]}&geoframe=${nation[1]}&geoframe=${nation[2]}&geoframe=${nation[3]}&begin=${startDate}&end=${endDate}&limit=100&offset=0`;
                } else {
                  linkR = (valueChange === 'true') ? `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?country=${nation}&begin=${newArr[5-i]}&end=${newArr[6-i]}&limit=1&offset=0` : `https://api.v2.emissions-api.org/api/v2/${emission}/average.json?geoframe=${nation[0]}&geoframe=${nation[1]}&geoframe=${nation[2]}&geoframe=${nation[3]}&begin=${newArr[5-i]}&end=${newArr[6-i]}&limit=100&offset=0`;
                }
                fetch(linkR)
                .then(function(response){return response.json()})
                .then(function(commits){newArrY.push(commits[0].average); setY([... newArrY].toSorted().toReversed())})
              }
            }
            useEffect(()=>{
              getY()
            },[])

            return(
              y && Object.values(y).length>=0 && Object.values(y).map((yValue, yInd, yArr) => 
                <div key={yValue} className="value">{
                  (yArr[0] > 1) ? Math.trunc((yArr[0]/6)*(6-yInd)) : 
                  (yArr[0] > 0.1) ? Math.trunc(((yArr[0]/6)*(6-yInd))*1000) : 
                  (yArr[0] > 0.01) ? Math.trunc(((yArr[0]/6)*(6-yInd))*10000) : Math.trunc(((yArr[0]/6)*(6-yInd))*1000000)}
                </div>
                )
            )

          }


        return (
          <div id="chart">
              <div id="y-axis">
                <div id="y-axis-values">
                  <YAxis />
                </div>
                <div></div>
              </div>
              <div className="container-graphic">
                  <Rettangles />
                  <Dates />
              </div>
          </div>
        )
    }


    return (
      <>
        <div id="dashboard">
          <h3>{title}</h3>
          <AverageEmissions />
          <h4>{emission}</h4>
          <DescriptionEmissions />
        </div>
        <Chart />
      </>

    )
}
