console.log('Hello, Type')


function addT(a: number, b: number) {
    return a + b;
}

const sum = addT(2, 2);

// boolean
let muted: boolean = true;
muted = false;

let numerado: number = 1

let nombre: string = 'Andres';

// arreglos

let people: string[] = [];

people = ['Isabele', 'Nicole'];

people.push('Andres');

let peopleAndNumber: Array<string | Number> = [];

peopleAndNumber.push('Cindy');

peopleAndNumber.push(2);

// Enum

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Rojo;

console.log(`Mi color favorito es ${colorFavorito}`);

// Any

let comodin: any = 'Joker';

comodin = {
    type: 'WildCard'
}


//object

let someObject: object = {
    type: 'WildCard'
}

// functions

function add(a: number, b: number): number {
    return a + b;
}

const suma = add(1, 3);

function createAdder(a: number) {
    return function(b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);

const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string{
    return `${firstName} ${lastName}`;
}

const andres = fullName('Andres');

// interface

interface Rectangulo {
    ancho: number
    alto: number,
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 3
}
function area(r: Rectangulo):number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());