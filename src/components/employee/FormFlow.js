// import { AnimalProvider } from "../animal/AnimalProvider"

// When the user clicks the Edit GamepadButton, AnimalForm is invoked
// AnimalForm pulls the specified functions from each context AnimalProvider
// Invoke useState to create animal state variable as an object with placeholder key value pairs and setAnimal function
// Invoke useState to create isLoading state variable as true and setIsLoading function
// Declare handleControlledInputChange function, which will change each key value pair in animal state variable equal to the user's selection/input; then setAnimal
// Declare handleSaveAnimal, which wil:
//     check to see if the user selected a location
//         if true (animal.locationId === 0), tell the user to select a location
//         else, setIsLoading(true) disables the Save button
//     check to see if animalId exists (the user selected Edit Animal which includes a dynamic param equal to animal.id)
//         If true, invoke UpdateAnimal function with following object: 
//             {
//                 id: animal.id,
//                 name: animal.name,
//                 breed: animal.breed,
//                 locationId: parseInt(animal.locationId),
//                 customerId: parseInt(animal.customerId)
//             }
//             .then history.push the user to /animals/detail/${animal.id}
//         else, invoke addAnimal with following object:
//             {
//                 name: animal.name,
//                 breed: animal.breed,
//                 locationId: parseInt(animal.locationId),
//                 customerId: parseInt(animal.customerId)
//             }
//             .then history.push user to /animals
// Decalre useEffect function where callback invokes getCustomers.then getLocations .then
//         if animalId exists invoke getAnimalById(animalId)
//             .then setAnimal(animal) to update animal state and setIsLoading(false) to enable save button because animalId only exists if the user is editing, which means all fields are completed at this point 
//         else setIdLoading(false), because animalId only exists in the details view and all of those button clicks will have an animalId 
// return JSX containing form 
//             Note: All fields the user can change have an event listener to invoke handleControlledInputChange
//                   Save button will:
//                     check to see if animalId exists and returns true or false and return appropriate string for button text
//                     prevents default on click
//                     invokes handleSaveAnimal on click 

            
                    
