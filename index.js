Ejercicio1
var admin = ''; 
var name = '';

name = 'John'
admin = name
console.log(`Debe salir ${admin}`)

Ejercicio2
let tierra = ''
let nombreVisitante = ''

Ejercicio5
let user = {}
user.name = 'Jhon'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
console.log(user)

Ejercicio7
let suma = 0

let salaries = {
    Jhon: 100,
    Ann: 160,
    Pete: 130,
}

for (let key in salaries){
    if(key){
        suma += salaries[key]
    }
    else{
        suma = 0
    }
}

console.log(suma)


Ejercicio8
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key]) 'number'){
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu)
