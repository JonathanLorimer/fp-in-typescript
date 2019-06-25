import { Functor } from "./index"

interface Wrong<W, R> extends Functor<R> {
	tag: "wrong"
	reason: W
}
const wrong = <W, R>(reason: W): Wrong<W, R> => ({
	tag: "wrong",
	reason,
	map: (_) => wrong(reason),
})

interface Right<W, R> extends Functor<R> {
	tag: "right"
	value: R
}
const right = <W, R>(value: R): Right<W, R> => ({
	tag: "right",
	value,
	map: (f) => right(f(value)),
})

type Either<W, R> = Wrong<W, R> | Right<W, R>
