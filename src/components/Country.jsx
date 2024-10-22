import { useState } from 'react'
import '../country.css'
export default function Country({country,handleVisitedCountries, handleVisitedFlags}) {
   const {name,flags, population,area,cca3} = country
   const [visited, setVisited] = useState(false)

   const handleVisited = ()=>{
    setVisited(!visited)
   }
  return (
    <div className={`country ${visited && 'visited'}`}>
        <h3>Name: {name.common}</h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Code: {cca3}</p>
        <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
        <button onClick={()=>handleVisitedFlags(country.flags.png)}>Visited Flags</button>
        <button onClick={handleVisited}>{visited?"Done":'Going'}</button>
        {visited ?'I visited this Country':'I Want Visit'}
    </div>
  )
}
