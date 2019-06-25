import { Unknown3 } from "./index"

interface Pair<T, U> extends Unknown3<U> {
	first: T
	second: U
}

const pair = <T, U>(first: T) => (second: U): Pair<T, U> => ({
	first,
	second,
	unknown3: undefined,
})
