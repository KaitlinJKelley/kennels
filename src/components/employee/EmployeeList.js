import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
	getEmployees()
    }, [])

    const history = useHistory()


  return (
    <>
    <button onClick={() => {history.push("/employees/create")}}>New Employee</button>
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
    employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)
    }
    </div>
    </>
  )
}