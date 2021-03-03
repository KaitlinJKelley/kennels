import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
	getLocations()
    }, [])

  const history = useHistory()

  return (
    <>
    <button onClick={() => {history.push("/locations/create")}}>Add Location</button>
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
    locations.map(location => <LocationCard key={location.id} location={location} employees={location.employees} animals={location.animals}/>
    )
    }
    </div>
    </>
  )
}