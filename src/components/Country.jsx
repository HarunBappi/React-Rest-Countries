import { useState } from 'react'
import '../country.css'
export default function Country({country}) {
   const {name,flags, population,area,cca3} = country
   const [visited, setVisited] = useState(false)

   const handleVisited = ()=>{
    setVisited(!visited)
   }
  return (
    <div className="box">
        <h3>Name: {name.common}</h3>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>Code: {cca3}</p>
        <button onClick={handleVisited}>{visited?"Done":'Going'}</button>
        {visited ?'I visited this Country':'I Going to Visit'}
    </div>
  )
}
