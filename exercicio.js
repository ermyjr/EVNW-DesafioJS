//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
const day = "Esta claro";
const night = "Esta escuro";
let hour = 18;

if (hour >= 7 && hour <= 17) {
    console.log(day)
} else {
    console.log(night)
}


//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

//03 - crie uma função que exiba uma mensagem no console

function alert() {
    console.log("Olá, bem vindo ao JS")
}

alert();

//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function showName(name) {
    console.log(`Oi eu sou o ${name}`);
}

showName("Elizeu");

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function showInfo(name, age, musicalTaste) {
    console.log("Meu nome:", name);
    console.log("Minha idade:", age);
    console.log("Minha preferência musical:", musicalTaste);
}
showInfo("Elizeu", 28, "Rock Internacional");

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function showMovie(title, music) {
    console.log("Meu filme favorito:", title);
    console.log("Minha musica favorita:", music);

}

showMovie("Star Wars", "The Sound of Silence")


//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function tripleNumber(number) {
    return number * 3;
}

let numberReceived = 10;
let result = tripleNumber(numberReceived);

console.log("O triplo de", numberReceived, "é:", result);


//08 - crie uma função que  verifique se uma  variável é true ou false

function verify(value) {
    if (value === 'boolean') {
        return "A variável é true.";
    } else {
        return "A variável é false.";
    }
}
;

console.log(verify(10));


//09 - Crie um array que receba 5 itens e exiba no console.

const foods = ["chipa", "sopa paraguaia", "pastel", "bolinho de chuva", "torta de frango"];

console.log(foods);


//10 - Utilize um método para adicionar um nome ao inicio do array.


let numbersAdd = [1, 2, 3, 4, 5, 6];

numbersAdd.unshift(0);

console.log(numbersAdd);


//11 - Utilize um método para remover o último nome do array.

let nameRemove = ["roberto", "joão", "pedro", "joaquim"];

nameRemove.pop();

console.log(nameRemove);

//12 - Utilize um método para adicionar dois nomes ao fim do array.

let namesAdd = ["roberto", "joão", "pedro", "joaquim"];

namesAdd.push("maria", "josé");

console.log(namesAdd);


//13 - Utilize um método para remover o primeiro nome do array.

const foodRemove = ["chipa", "sopa paraguaia", "pastel", "bolinho de chuva", "torta de frango"];

foodRemove.shift();

console.log(foodRemove);


/*14 - Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]*/

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort();

console.log(numbers);



//15 - Crie um objeto que receba ao menos três propriedades sobre você.

const feature = {
    age: 28,
    hair: "black",
    food: "chipa"
}

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.

feature.hobby = "play guitar";
console.log(feature);

//17 - Remova uma propriedade desse objeto.

delete feature.hair;
console.log(feature);

//18 - Mostre no console todas as propriedades desse objeto.
let property = Object.keys(feature);

console.log(property);


/*19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
Na propriedade amigos, adicione ao menos 4 amigos.*/
let cadastro = [
    { nome: "huguinho", idade: 7, telefone: '(55) 93123-4567', amigos: ["zezinho", "luizinho", "tio patinhas", "pato donald"] },
    { nome: "mickey", idade: 30, telefone: '(55) 93123-6789', amigos: ["minie", "margarida", "pluto", "pateta"] },
    { nome: "woody", idade: 47, telefone: '(55) 93123-1234', amigos: ["buzz", "sr batata", "betty", "jessie"] },
    { nome: "obi wan", idade: 57, telefone: '(55) 93456-1234', amigos: ["luke", "anakin", "R2-D2", "yoda"] },
    { nome: "vegeta", idade: 64, telefone: '(55) 93456-6789', amigos: ["goku", "bills", "bulma", "trunks"] }
]


console.log(cadastro);


//20 - Mostre no console o nome de um amigo de cada lista.

for (let pessoa of cadastro) {
    console.log( pessoa.nome, "é amigo de", pessoa.amigos[0]);
}