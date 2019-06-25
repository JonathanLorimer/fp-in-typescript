import { Unknown3 } from "./index"
interface Just<T> extends Unknown3<T> {
	kind: "just"
	value: T
}
const just = <T>(value: T): Just<T> => ({
	kind: "just",
	value,
	unknown3: undefined,
})

interface Nothing<T> extends Unknown3<T> {
	kind: "nothing"
	value: null
}
const nothing = <T>(): Nothing<T> => ({
	kind: "nothing",
	value: null,
	unknown3: undefined,
})

export type Maybe<U> = Just<U> | Nothing<U>
