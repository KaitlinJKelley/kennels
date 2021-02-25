import React from "react"
import "./Kennel.css"
import "./animal/Animal.css"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"
import { PropsAndState } from "./PropsAndState"

export const Kennel = () => {
    const kennelInfo = {
        name: "Nashville Kennels North",
        location: {
            address: "500 Puppy Way",
            numOfStaff: 4
        }
    }

    return (
     <>
        <h2>{kennelInfo.name}</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>{kennelInfo.location.address}</div>
        </address>
        <PropsAndState yourName={"Kaitlin"}/>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
    )   
}