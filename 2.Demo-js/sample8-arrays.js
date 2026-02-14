// Arrays (List) -> listas, arreglos

const list = ['Pepe', 22, true, 'Ernestina']
const numbers = [1, 5, 9, 12, 32, 35]
const contacts = ['Pepe', 'Ernestina', 'Luis']

console.log(contacts.length)
console.log(contacts[0])
contacts[0] = 'Jose'
console.log(contacts[0])
contacts[contacts.length] = 'Rosa'
contacts.push('Ramon')
// contacts[100] = 'María'
// contacts.length = 2
console.log(contacts)

for (let i = 0; i < contacts.length; i++) {
    const item = contacts[i];
    console.log(`Hola, ${item}, como estás` )
}
