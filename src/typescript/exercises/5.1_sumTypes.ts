/*
Task: Create a function that takes a string "firstname" or
"lastname" and returns the correct value
*/
import { Firstname, Lastname } from "../pictures/4_typeAliases"
import { Name, FlexibleAge } from "../pictures/5_sumTypes"

interface Person {
	firstname: Firstname
	lastname: Lastname
	age: FlexibleAge
}
