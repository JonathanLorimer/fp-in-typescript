import { Functor } from "./index"
interface Just<T> extends Functor<T> {
	kind: "just"
	value: T
}
const just = <T>(value: T): Just<T> => ({
	kind: "just",
	value,
	map: (f) => just(f(value)),
})

interface Nothing<T> extends Functor<T> {
	kind: "nothing"
	value: null
}
const nothing = <T>(): Nothing<T> => ({
	kind: "nothing",
	value: null,
	map: (_) => nothing(),
})

export type Maybe<U> = Just<U> | Nothing<U>
