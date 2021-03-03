import React from "react"
import { Link } from "react-router-dom"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        {/* Why {} here but not in navbar links? Because we're using interpolation here */}
        <Link to={`/employees/detail/${employee.id}`}className="employee__name">
            {employee.name}
        </Link>
        <address className="location__address">{employee.location.name}</address>
    </section>)