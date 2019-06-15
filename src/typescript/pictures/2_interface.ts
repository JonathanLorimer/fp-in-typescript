export {}

interface ProgrammingLanguage {
	name: string
	functionalSupport: boolean
	version: number
}

const javascript: ProgrammingLanguage = {
	name: "ECMAScript",
	functionalSupport: true,
	version: 9,
}
const ruby: ProgrammingLanguage = {
	name: "Ruby",
	functionalSupport: true,
	version: 2.6,
}

const java: ProgrammingLanguage = {
	name: "java",
	functionalSupport: false,
	version: 7,
}
