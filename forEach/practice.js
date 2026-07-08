//Display each elements of an array
let numbers = [1,2,3,4,5,6,7,8,9,10];

function display(element){
    console.log(element);
}

numbers.forEach(display);


//Display array elements in square form
let numbers = [1,2,3,4,5,6,7,8,9,10];

function square(element){
    console.log(Math.pow(element,2));
}

numbers.forEach(square);


//Display array elements in cubic form
let numbers=[1,2,3,4,5,6]

function cube(element,index,array){
    array[index]=Math.pow(element,3);
}

function display(element){
    console.log(element);
}

numbers.forEach(cube);
numbers.forEach(display);


//Display fruits using anonymous function
let fruits=["Apple","Mango","Banana","Orange","Watermelon"];

fruits.forEach(function(fruit){
    console.log(fruit);
});


//Convert all elements to UpperCase
let fruits=["apple","mango","banana","orange","watermelon"];

fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
});


//Display index along with elements
let colors = ["Red", "Green", "Blue", "Yellow"];

function display(element,index){
    console.log("Index "+index+" : "+element);
}

colors.forEach(display);