const identity = <T>(x: T): T => x

const myString = identity<string>("hello world")

const constant = <A, B>(x: A, y: B): A => x
const seq = <A, B>(x: A, y: B): B => y
