//Product
let numbers = [2,3,4];

let result = numbers.reduce(function(accumulator,currentValue){

    return accumulator * currentValue;

},1);

console.log(result);



//Largest Number
let num = [1,2,3,4,5]

let largest = num.reduce(function(accumulator,currentValue){
    if(currentValue>accumulator){
        return currentValue;
    }
    return accumulator;
});
console.log(largest);



//Count even numbers
let numbers = [1,2,3,4,5,6,7,8,9,10]

let count = numbers.reduce(function(accumulator,currentValue){
    if(currentValue%2==0){
        return accumulator+1;
    }
    return accumulator;
},0);

console.log(count);



//Sum of all numbers
let numbers = [2,4,6,8,10,12,14,16,18,20];

let sum = numbers.reduce(function(accumulator,currentValue){
    return (accumulator+currentValue);
},0);

console.log(sum);



//Sum of Square of Numbers
let numbers = [10,20,30,40,50,60,70,80,90,100];

let sumSquare = numbers.reduce(function(accumulator,currentValue){
    return ((accumulator+(Math.pow(currentValue,2))));
},0);

console.log(sumSquare);



//Count Positive Numbers
let numbers = [-5,10,-2,7,15,-8];

let positive = numbers.reduce(function(accumulator,currentValue){
    if(currentValue>0){
        return accumulator+1;
    }
    return accumulator;
},0);
console.log(positive);