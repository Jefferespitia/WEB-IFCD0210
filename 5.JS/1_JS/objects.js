// Objects

const o = {
    name: 'Pepe',
    age: 22,
};

// practica regular o custionable
o.job = 'Developer';

// mala practica
// delete o.age;

 const prop = null //'name';

console.log(o[prop]);
console.log(o[prop ? prop: 'job']);
console.log(o.prop);
console.log(prop);


///

const user = {
    name: 'Pepe',
    age: 22,
    job: 'Developer',
}

for (const key in user) {
    const value = user[key];
    console.log(`Clave ${key} el valor es ${value}`);
    
}

// Object.keys(user)
// // Object.value(user)
// console.log(Object.entries(user))

