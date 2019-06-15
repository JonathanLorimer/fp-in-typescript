interface Javascript {
	name: "javascript"
	functionalSupport: boolean
	version: number
	packageManager: string
}
interface Ruby {
	name: "ruby"
	functionalSupport: boolean
	version: number
	onRails: boolean
}

interface Java {
	name: "java"
	functionalSupport: boolean
	version: number
	compiler: string
}

type ProgrammingLanguage = Javascript | Ruby | Java

/*
create three functions that takes a ProgrammingLanguage and will return true if
the ProgrammingLanguage passed is the one the function expects
*/

const isJavascript = () => {}
const isRuby = () => {}
const isJava = () => {}
