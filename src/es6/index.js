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
