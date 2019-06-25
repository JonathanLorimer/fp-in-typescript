import { Unknown3 } from "./index"

interface Wrong<W, R> extends Unknown3<R> {
	tag: "wrong"
	reason: W
}
const wrong = <W, R>(reason: W): Wrong<W, R> => ({
	tag: "wrong",
	reason,
	unknown3: undefined,
})

interface Right<W, R> extends Unknown3<R> {
	tag: "right"
	value: R
}
const right = <W, R>(value: R): Right<W, R> => ({
	tag: "right",
	value,
	unknown3: undefined,
})

type Either<W, R> = Wrong<W, R> | Right<W, R>
