const firstOOP = {
    key: 'value',
    brand: 'KFC',
    name: 'Karol',
    surname: 'Filas',
    vatNumber: 142134235235,
    body: {
        height: 186,
        weight: 90,
        sound() {
            console.log('łaaa wrrr');
        },
        'fav-color': 'zielony',
    }
}

firstOOP.sbike = 'gravel'
firstOOP['fav-food'] = 'pizza'

console.log(firstOOP);
console.log(firstOOP.name);
console.log(`zawodnik ${firstOOP.name} ${firstOOP.surname} prowadzący firme ${firstOOP.brand} ma wzrost wysokości ${firstOOP.body.height} pozdrawiam`);
firstOOP.body.sound()

/*
-----------------------------------------------------------------------------------
*/

const dogName = 'fafik'
const dogAge = 5

const dog = {
    // name: dogName,
    // age: dogAge

    // dogName: dogName,
    // dogAge: dogAge

    dogName,
    dogAge
}

console.log(dog);

console.log('----------for in-----------');

// for in

const person = {
    name: 'Karol',
    age: '29',
    sex: 'yes, please',
    'hair-color': 'blonde'
}

for (const data in person) {
    console.log(person[data]);
}

console.log('----------this-----------');

// this

const user = {
    name: 'Karol',
    showName() {
        console.log(this.name);
    }
}

user.showName()

console.log('----------constructor-----------');

function Constr(x, y) {
    this.name = x
    this.age = y
    this.hello = function () {
        console.log(`Cześć ${this.name}`);
    }
}

const newConstr = new Constr('Karol', 29)
const newConstr2 = new Constr('Jurek', 21241252352359)
const newConstr3 = new Constr('Grażyna', 33)

console.log(newConstr, newConstr2, newConstr3);

console.log('----------prototype-----------');


function Human(a, b) {
    this.name = a
    this.surname = b
}

const newHuman = new Human('Karol', 'Filas')
const newHuman2 = new Human('Jadzia', 'Baba')
const newHuman3 = new Human('Arnolad', 'Szwarceneger')

console.log(newHuman, newHuman2, newHuman3);

Human.prototype.showSurname = function () {
    console.log(`My surname is ${this.surname}`);
}

newHuman2.showSurname()
newHuman3.showSurname()









