//Filter even numbers
let numbers = [1,2,3,4,5,6,7,8,9,10]

function isEven(element){
    return (element%2==0);
}

let even = numbers.filter(isEven);

console.log(even);



//Filter odd numbers
let numbers = [1,2,3,4,5,6,7,8,9,10]

function isOdd(element){
    return (element%2!=0);
}

let odd = numbers.filter(isOdd);

console.log(odd);



//Filter positive numbers
let numbers = [-5, 10, -2, 8, 0, 15];

function positive(element){
    return (element>0);
}

let posResult = numbers.filter(positive);

console.log(posResult);



//Filter words longer than 5
 const words = ["Apple", "Watermelon", "Cat", "Banana", "Dog"];

 function length(element){
    return ((element.length)>5);
 }

 const newWords = words.filter(length);

 console.log(newWords);



 //Filter names starting with 'A'
 let names = ["Alice", "Bob", "Andrew", "Charlie", "Alex"];

 function firstLetter(letter){
    return (letter.charAt(0)=='A');
 }

 let newName = names.filter(firstLetter);

 console.log(newName);