import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"


export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  
  // The useHistory hook let's us tell React which route we want to visit. We will use it to tell React to render the animal form component.
  const history = useHistory()

  useEffect(() => {
    getCustomers()
    .then(getAnimals)
  }, [])

  // ...
  
  return (
      <div className="animals">
        <h2>Animals</h2>
        <button onClick={() => {history.push("/animals/create")}}>
          Add Animal
        </button>
        {
          animals.map(animal => {
            // debugger
            const owner = customers.find(c => c.id === animal.customerId)
            return <AnimalCard key={animal.id} animal={animal} customer={owner} />
          })
        }
      </div>
  )
}