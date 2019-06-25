export {}

// Unknown1 :: a -> a
type Unkown1 = <T>(x: T) => T

// Unknown2 :: a -> b -> a
type Unkown2 = <T, V>(x: T) => (y: V) => T

// Unknown3 :: (a -> b) -> f a -> f b
export interface Unknown3<T> {
	unknown3: <U>(f: (x: T) => U) => Unknown3<U>
}

// Unknown4 :: a -> a -> a
export interface Unknown4<T> {
	unknown4: (x: T) => (y: T) => T
}

const stringUnknown4: Unknown4<string> = {
	unknown4: undefined,
}

const arrayUnknown4: Unknown4<number[]> = {
	unknown4: undefined,
}

const booleanUnknown4: Unknown4<boolean> = {
	unknown4: undefined,
}
