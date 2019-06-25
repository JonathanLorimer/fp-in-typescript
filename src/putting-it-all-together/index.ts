export {}

// Identity :: a -> a
type Identity = <T>(x: T) => T
const identity: Identity = undefined

// Constant :: a -> b -> a
type Constant = <T, V>(x: T) => (y: V) => T
const constant: Constant = undefined

// Map :: (a -> b) -> f a -> f b
export interface Functor<T> {
	map: <U>(f: (x: T) => U) => Functor<U>
}

// Append :: a -> a -> a
export interface Semigroup<T> {
	concat: (x: T) => (y: T) => T
}

const stringSemigroup: Semigroup<string> = {
	concat: (x) => (y) => x + y,
}

const arraySemigroup: Semigroup<number[]> = {
	concat: (x) => (y) => [...x, ...y],
}
