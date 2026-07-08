function greet(name,callback){
    console.log("Hi "+name);
    callback();
}

function sayBye(){
    console.log("Good Bye!");
}

greet("Alice",sayBye);