import { useEffect, useState } from "react"
import '../country.css'
import Country from "./Country"


export default function Countries() {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries]= useState([])
    const [visitedFlags,setVisitedFlags] = useState([])

    const handleVisitedCountries = country =>{
    const newVisitedCountry = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlags = flags=>{
    const newVisitedFlags = [...visitedFlags, flags]
    setVisitedFlags(newVisitedFlags)
    }

    useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
    },[])
  return (
    <div>
        <h3>Country: {countries.length}</h3>
        <div>
            <h3>Visited Country: {visitedCountries.length}</h3>
            <ul>
                {visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)}
            </ul>
        </div>
        <div className="visited-flag">
            {
             visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
            }
        </div>
        <div className="countries">
        {countries.map(country=>
        <Country key={country.cca3}
        handleVisitedCountries = {handleVisitedCountries}
        handleVisitedFlags = {handleVisitedFlags}
         country={country}></Country>)}
        </div>
    </div>
  )
}
