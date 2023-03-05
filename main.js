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
















