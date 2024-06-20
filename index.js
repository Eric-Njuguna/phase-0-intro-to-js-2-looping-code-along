// Code your solutions in this file

/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

//console.log(wrapGifts(gifts));

function writeCards([stringArray1, stringArray2, stringArray3], eventName){ 
    const storageArray = [stringArray1, stringArray2, stringArray3];
    let messageArray = [];
    for(let i = 0; i < storageArray.length; i++){
        messageArray.push(`Thank you, ${storageArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messageArray;
}

//console.log(writeCards(["Charlie", "Samip"], "wedding"));

function countDown(number){
    while(number >= 0){
        console.log(number);
        number --;
    }
    return number;
}

console.log(countDown(10));