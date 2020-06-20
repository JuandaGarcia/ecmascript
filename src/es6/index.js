//es6

//Valores por defecto
function newFunction2(name = 'Juan', age = 20, country = 'CO') {
	console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', '23', 'CO')

//Salto de linea remplaza al \n
let lorem = `Lorem ipsum dolor
sit amet.`
console.log(lorem)

//Destructuración
let persona = {
	name: 'Juan',
	age: 20,
}

let { name, age } = persona

console.log(name)

//Spread Operator
let team1 = ['Juan', 'Daniel']
let team2 = ['Valeria', 'David']

let team3 = ['Jose', ...team1, ...team2]

console.log(team3)

//let (Scope)

//Paramtros en objetos

let name = 'Juan'
let age = 20

//es5
let obj = { name: name, age: age }
//em6
let obj2 = { name, age }

console.log(obj2)

//arrow functions :D

//Promesas
const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Good')
		} else {
			reject('Bad')
		}
	})
}

helloPromise()
	.then((response) => console.log(response))
	.catch((error) => console.log(error))

//clases
class calculator {
	constructor() {
		this.valueA = 0
		this.valueB = 0
	}

	sumar(A, B) {
		this.valueA = A
		this.valueB = B
		return this.valueA + this.valueB
	}
}

const calc = new calculator()
console.log(calc.sumar(1, 2))

//modulos :D

//Generadores
function* helloWord() {
	if (true) {
		yield 'hello, '
	}
	if (true) {
		yield 'word'
	}
}

const genaratorHello = helloWord()
console.log(genaratorHello.next().value)
console.log(genaratorHello.next().value)
console.log(genaratorHello.next().value)
