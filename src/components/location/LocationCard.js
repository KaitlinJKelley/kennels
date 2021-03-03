import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({ location, employees, animals }) => (
    <section className="location">
        <Link to={`/locations/detail/${location.id}`}className="location__name">{location.name}</Link>
        <div className="location__employees">{employees?.length} employees</div>
        <div className="location__animals">{animals?.length} animals</div>
    </section>)