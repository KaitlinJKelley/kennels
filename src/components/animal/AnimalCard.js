import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        {<h3 className="animal__name">{animal.name}</h3> }
        <p className="animal__breed">{animal.breed}</p>
        {<address className="location__address">{animal.location.name}</address>}
        {<p className="customer__name">{customer.name}</p>}
    </section>
)
