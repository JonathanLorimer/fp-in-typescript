export {}

interface Pair<T, U> {
	first: T
	second: U
}

const pair = <T, U>(first: T, second: U): Pair<T, U> => {
	return { first, second }
}
