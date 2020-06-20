//all
const obj = {
	name: 'Juan',
	age: 20,
	country: 'CO',
}

let { name, ...all } = obj
console.log(name, all)
console.log(all)

//Concatnar obketos
const obj2 = {
	name: 'Juan',
	age: 20,
}

const obj3 = {
	...obj2,
	country: 'CO',
}

console.log(obj3)

//finally
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => resolve('Hello world'), 3000)
			: reject(new Error('Test Error'))
	})
}

helloWorld()
	.then((response) => console.log(response))
	.catch((error) => console.log(error))
	.finally(() => console.log('finalizo'))

//Mejora en regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
