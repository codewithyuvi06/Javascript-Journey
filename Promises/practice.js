// function walkDog(callback){
//     setTimeout(() => {
//         console.log("You walk the dog...");
//         callback();
//     },1500);
// }

// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("You cleaned the kitchen.");
//         callback();
//     },2500);
// }

// function tashOut(callback){
//     setTimeout(() => {
//         console.log("You put the trash out of the house.");
//         callback();
//     },500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         tashOut(() => {
//             console.log("You finished all the chores!");
//         })
//     });
// })


//INSTEAD OF USING CALLBACK HELL WE USE METHOD CHAINING :- PROMISES


function walkDog(){

    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog.");
            }
            else{
                reject("You didn't walk the dog.");
            }

        }, 1500);
    });
}

function cleanKitchen(callback){
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const kitchenClean = true;

            if(kitchenClean){
                resolve("You clean the kitchen.");
            }
            else{
                reject("You didn't clean the kitchen.");
            }

        }, 2500);
    });
}

function tashOut(callback){
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const outTrash = false;

            if(outTrash){
                resolve("You take the trash out.");
            }
            else{
                reject("You didn't take the trash o.");
            }
            
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return trashOut()})
            .then(value => console.log(value)); 