//Square all elements of an array
let numbers=[1,2,3,4,5]

function square(element){
    return Math.pow(element,2);
}

let squares=numbers.map(square)

console.log(squares);



//All names to uppercase
let names=["john", "alice", "bob", "charlie"];

function capitalName(name){
    return name.toUpperCase();
}

let nameCapital = names.map(capitalName);

console.log(nameCapital);



//Add 10 to every number
let numbers=[5,10,15,20,25,30];
console.log(numbers);

function add(element){
    return (element+10);
}

let addResult = numbers.map(add);

console.log(addResult);



//Convert Temperature from Celsius to Farenheit
let temperature = [0, 20, 30, 40];
console.log("Temperatures in Celsius");
console.log(temperature);

function convert(element){
    return ((element*9/5)+32);
}

let tempVal = temperature.map(convert);

console.log(tempVal);



//Find length of each word
let word=["JavaScript", "HTML", "CSS", "React"];

function length(element){
    return element.length;
}

let result = word.map(length);

console.log(result);



//Add Mr. before every name
let names = ["Rahul", "Amit", "Sourav"];

function name(element){
    return ("Mr. "+element);
}

let newName = names.map(name);

console.log(newName);



//Double product prices
const prices = [100, 250, 300, 450];

function doublePrice(element){
    return (element*2);
}

let newPrices = prices.map(doublePrice);

console.log(newPrices);

