import { useEffect, useState } from "react"
import '../country.css'
import Country from "./Country"


export default function Countries() {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
    },[])
  return (
    <div>
        <h3>Country: {countries.length}</h3>
        <div className="countries">
        {countries.map(country=><Country key={country.cca3} country={country}></Country>)}
        </div>
    </div>
  )
}
