import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeForm = () => {
    const { addEmployee, updateEmployee, getEmployeeById } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */
   
   const [employee, setEmployee] = useState({
     name: "",
     locationId: 0
    });
    
    const [isLoading, setIsLoading] = useState(true)
    
    const history = useHistory();
    const {employeeId} = useParams()
    console.log("employeeId", employeeId)

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      // Copy, Reassign, Set
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEmployee = { ...employee }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = event.target.value
      // update state
      setEmployee(newEmployee)
      console.log("At Input Change", newEmployee)
    }

    const handleClickSaveEmployee = () => {

      const employeeName = employee.name
      const employeeLocation = employee.locationId

      if (employeeName === "" || employeeLocation === 0) {
        window.alert("Please input an employee name and choose a location")
      } else {
        // Prevents additional clicks after initial click, if all fields are correct
        setIsLoading(true)
      }
      if (employeeId) {
        // If employeeId exists, updateEmployee
        updateEmployee({
          id: employee.id,
          name: employee.name,
          locationId: parseInt(employee.locationId)
        })
        .then(history.push(`/employees/detail/${employee.id}`))
      } else {
        // If there is no employeeId addEmployee
        addEmployee({
          name: employee.name,
          locationId: parseInt(employee.locationId)
        })
        .then(history.push(`/employees`))
      }
    }

   useEffect(() => {
     getLocations()
     .then(() => {
        if (employeeId) {
          getEmployeeById(employeeId)
          .then(employee => setEmployee(employee))
          .then(setIsLoading(false))
        } else {
          // User has to be able to click Save at least once to invoke handleClickSaveEmployee
          setIsLoading(false)
        }
     })
      }, [])

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
           <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select  value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleClickSaveEmployee()
            }}>
            {employeeId ? "Save Employee" : "Add Employee"}
          </button>
      </form>
    )
}
