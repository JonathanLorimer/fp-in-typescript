interface Person {
	firstname: string
	lastname: string
	age: number
}

// Create a factory function that will build a person
const personFactory = (): Person => undefined

// Create a getter function for each field
// Provide correct type signatures for the function
const firstnameGetter = () => {}
const lastnameGetter = () => {}
const ageGetter = () => {}
