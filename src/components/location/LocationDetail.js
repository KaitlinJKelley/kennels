import React, { useContext, useState, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import userEvent from "@testing-library/user-event"
import { useHistory, useParams } from "react-router-dom"

export const LocationDetail = () => {

    const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    getLocationById(locationId)
    .then((response) => {
        setLocation(response)
    })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            {/* What's up with the question mark???? See below.*/}
            <div className="location__address">{location.address}</div>
            <div className="location__employees">
                <h5>Employees</h5> {
            location.employees?.map(employee => employee?.name)
            }</div>
            <div className="location__animals">
                <h5>Animals</h5> {
            location.animals?.map(animal => animal?.name)
            }</div>
            <button onClick={() => {history.push(`/locations/edit/${location.id}`)}}>Edit</button>
        </section>
    )
}