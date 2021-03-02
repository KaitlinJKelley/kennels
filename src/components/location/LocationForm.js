import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "./LocationProvider"

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)

    const [location, setLocation] = useState(
        {
            name: "",
            address: ""
        }
    )
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newLocation = {...location}
        let selectedVal = event.target.value

        newLocation[event.target.id] = selectedVal

        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        if (location.name === "" || location.address === "") {
            window.alert("Please input a location name and address")
        } else {
            addLocation(location)
            .then(history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
          <h2 className="locationForm__title">New Location</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
              </div>
          </fieldset>
           <fieldset>
              <div className="form-group">
              <label htmlFor="name">Location address:</label>
              <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Save Location
          </button>
        </form>
    )
}



