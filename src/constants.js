export const LANGUAGE_VERSIONS = {
	javascript: '18.15.0',
	python: '3.10.0',
}

export const CODE_SNIPPETS = {
	javascript: `function helloWorld() {\n\t\n}\n\nhelloWorld();\n`,
	typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
	python: `def helloWorld():\n\t\n\nhelloWorld()\n`,
}
