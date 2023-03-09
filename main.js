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

Human.prototype.age = 18

newHuman2.showSurname()
newHuman3.showSurname()

// task no.1

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

// console.log(btn1, p);

function Food(x, y) {
    this.name = x
    this.price = y
}

const pizza = new Food('pizza', 39);
const pasta = new Food('carbonarra', 34);
const soup = new Food('pomidorowa', 19);

Food.prototype.menu = function () {
    console.log(`${this.name} kosztuje ${this.price}`);
}

// pizza.menu() `${this.name} kosztuje ${this.price}`

// btn1.addEventListener('click', () => pizza.menu())
// btn2.addEventListener('click', () => pasta.menu())
// btn3.addEventListener('click', () => soup.menu())

// this v2

const dear = {
    name: 'jurek',
    surmane: 'dziki',
    adress: {
        city: 'zabrze',
        home: 'las',
        showAdress: function () {
            console.log(this);
        }
    }
}

dear.adress.showAdress()

function Dears(hehe) {
    this.name = hehe
}

const dear1 = new Dears('patryk')
const dear2 = new Dears('grzegorz')

console.log(dear1, dear2);

// this v3

const btns = document.querySelectorAll('button')

btns.forEach(btn => btn.addEventListener('click', function () {
    console.log(this.textContent);
}))

// bind

console.log('----------bind-----------');

function test() {
    console.log(this);
    console.log(this.name);
}

const car1 = {
    name: 'audi'
}
const car2 = {
    name: 'bmw'
}
const car3 = {
    name: 'toyota'
}

test.bind(car3)()

console.log('----------call & apply-----------');

const movie = {
    title: 'Avengers'
}

function showMovie(price, cinema) {
    console.log(`Film: ${this.title}, cena: ${price}, kino: ${cinema}.`);
}

showMovie(30, 'multikino')

showMovie.call(movie, 35, 'superkino')

showMovie.apply(movie, [35, 'superkino'])

console.log('----------class-----------');

function Guest(name, age) {
    this.name = name
    this.age = age
}

Guest.prototype.showAge = function () {
    console.log(`Mam ${this.age} lata!`);
}

Guest.prototype.sayHi = function () {
    console.log(`Cześć, jestem ${this.name}!`);
}

const personOne = new Guest('Ania', 23)

personOne.sayHi()
personOne.showAge()

class Guest2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log(`Cześć, jestem ${this.name}!`);
    }

    showAge() {
        console.log(`Mam ${this.age} lat!`);
    }
}

const personTwo = new Guest2('Jolanta', 45)
personTwo.sayHi()
personTwo.showAge()

// some examples

function Football(name, number, club) {
    this.name = name
    this.number = number
    this.club = club
}

Football.prototype.showPlayer = function () {
    console.log(`${this.name} z numerem na koszulce ${this.number} gra dla klubu sportowego o nazwie ${this.club}, proszę o oklaski!`);
}

const lewy = new Football('Robert Lewandowski', 9, 'Fc Barcelona')

console.log(lewy);
lewy.showPlayer()

class Foot {
    constructor(name, number, club) {
        this.name = name
        this.number = number
        this.club = club
    }
    showPla() {
        console.log(`${this.name} z numerem na koszulce ${this.number} gra dla klubu sportowego o nazwie ${this.club}, proszę o oklaski!`);
    }

}

const dembele = new Foot('Dembele', 7, 'Fc barcelona')
console.log(dembele);
dembele.showPla()

console.log('----------extends & super-----------');

class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log('Zawierzak robi hau hau');
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    sound() {
        console.log('miau miau');
    }
}

const newDog = new Dog('Drops', 6)
console.log(newDog);
newDog.sound()

const newCat = new Cat('Filemon')
newCat.sound()
console.log(newCat);










