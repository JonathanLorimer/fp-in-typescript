export {}
/*
Task: Create a function that takes a string "firstname" or
"lastname" and a Person and gets the Firstname or Lastname property
off of the Person object
*/
type Firstname = string
type Lastname = string
type FlexibleAge = number | string

interface Person {
	firstname: Firstname
	lastname: Lastname
	age: FlexibleAge
}
