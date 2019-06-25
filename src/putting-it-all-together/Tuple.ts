import { Functor } from "./index"

interface Pair<T, U> extends Functor<U> {
	first: T
	second: U
}

const pair = <T, U>(first: T) => (second: U): Pair<T, U> => ({
	first,
	second,
	map: undefined,
})
