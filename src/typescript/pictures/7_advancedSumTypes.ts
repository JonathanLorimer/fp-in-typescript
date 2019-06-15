export {}

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

const getUniqueProperty = (lang: ProgrammingLanguage): string | boolean => {
	switch (lang.name) {
		case "javascript":
			return lang.packageManager
		case "ruby":
			return lang.onRails
		case "java":
			return lang.compiler
	}
}
