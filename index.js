// for (let age = 30; age < 40; age++){
//     console.log(`I am ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
// wrapGifts(gifts);

// function wrapGiftsWithWhileLoop(gifts){
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bowl!`);
//         i++;
//     }
//     return gifts;
// }

// const names = ["Omer", "Merve", "Esma"];

function writeCards(arrayOfNames, eventName){
    const newArray = [];
    for (let i = 0; i < arrayOfNames.length; i++){
        newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

console.log(writeCards(names, "surprise"));

function countDown(positiveNumber){
    while (positiveNumber >= 0){
        console.log(positiveNumber--);
    }
}

countDown(10);