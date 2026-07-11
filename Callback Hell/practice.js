function task1(){
    setTimeout( () => {
        console.log("Task 1 Complete");
    },2000);
}

function task2(){
    setTimeout( () => {
        console.log("Task 2 Complete");
    },1000);
}

function task3(){
    setTimeout( () => {
        console.log("Task 3 Complete");
    },3000);
}

function task4(){
    setTimeout( () => {
        console.log("Task 4 Complete");
    },1500);
}

task1();
task2();
task3();
task4();

console.log("All Tasks are complete");