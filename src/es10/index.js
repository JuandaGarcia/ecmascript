//array.flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2))

let array2 = [1, 2, 3, 4, 5]

console.log(array2.flatMap((value) => [value, value * 2]))

//trim
let hello = '          hello world'

console.log(hello)
console.log(hello.trimStart())

let hello = 'hello world          '

console.log(hello)
console.log(hello.trimEnd())

// catch viejo
try {
} catch (error) {
	console.log(error)
}
// catch nuevo
try {
} catch {
	console.log(error)
}

//Covertir array a objeto
let entries = [
	['name', 'Juan'],
	['age', 20],
]

console.log(Object.fromEntries(entries))

//Symbol
let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)
