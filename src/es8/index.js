//Object.entries
const data = {
	fronted: 'Juan',
	backend: 'David',
	desingn: 'Ana',
}

const entries = Object.entries(data)
console.log(entries)
//Bueno para saber cuantos valores tiene un objeto
console.log(entries.length)

//Object.values
const data2 = {
	fronted: 'Juan',
	backend: 'David',
	desingn: 'Ana',
}

const values = Object.values(data2)
console.log(values)
//Bueno para saber cuantos valores tiene un objeto
console.log(values.length)

//padStart
const text = 'hello'
console.log(text.padStart(7, 'hi'))
console.log(text.padEnd(12, '----'))

//async await

const helloWorld = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('Hello world'), 3000)
			: reject(new Error('Test Error'))
	})
}

const helloAsync = async () => {
	const hello = await helloWorld()
	console.log(hello)
}

helloAsync()

const AnotherFunction = async () => {
	try {
		const hello = await helloWorld()
		console.log(hello)
	} catch (error) {
		console.log(error)
	}
}

AnotherFunction()
