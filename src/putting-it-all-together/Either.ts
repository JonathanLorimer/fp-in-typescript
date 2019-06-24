interface Left<L> {
	tag: "left"
	reason: L
}
const left = <L>(reason: L): Left<L> => ({ tag: "left", reason })

interface Right<R> {
	tag: "right"
	value: R
}
const right = <R>(value: R): Right<R> => ({ tag: "right", value })

type Either<L, R> = Left<L> | Right<R>
