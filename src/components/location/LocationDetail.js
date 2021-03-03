import React, { useContext, useState } from "react"
import { LocationContext } from "./LocationProvider"
import userEvent from "@testing-library/user-event"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

const LocationDetail = () => {

    const { getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})
    const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
        .then(response => {
            setLocation(response)
        })
    })

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            {/* What's up with the question mark???? See below.*/}
            <div className="location__employees">{location.employees?.length} employees</div>
            <div className="location__animals">{location.animals?.length} animals</div>
        </section>
    )
}