// // Entscheidungsstrukturen | control structures

// //Deklaration
// let ageJohn, ageMark;
// let isJohnOlder, isJohnEqual;

// // Assigment (Wertzuweisung)
// ageJohn = 35;
// ageMark = 30;

// // Test | Logisch Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);


// // Ausgabe
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);


// /******** IF ********/
// // TINA --> There is no alternative!
// //entweeder JA oder nix ... alternativlos

// // if (condition)
// // if (true)
// // if (false)
// if(isJohnOlder) //(ageJohn > ageMark) geht auch

// {   //Ja-Zweig / true
//     console.log("John ist älter");
// }
// else {
//     // Nein -Zweig /false
//     console.log("John ist jünger. ");
// }

// //******* Ternäre (ternary) schreibweise *******//
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/******* Fallunterscheidung / CASE|SWITCH 1 ******/

let firstName = "Jane";
let job;
job ="driver"; // ... fährt Taxi!
job ="diver";  // ... taucht im Rhein!
job ="artist"; // ... malt ein Bild!
job ="pilot";  // ... fliegt ein Flugzeug!

job ="teachter"; // ... unterrichtet!
job ="instructor"; // .. unterrichtet!

switch (job)
{
    case "driver": //1. Fall (case)
console.log(firstName + " fährt Taxi!");
    break;
    case "diver": //2. Fall (case)
console.log(firstName + " taucht im Rhein!");
    break;
    case "artist": //3. Fall (case)
console.log(firstName + " malt ein Bild!");
     break;
     case "teacher": //4. Fall (case)
     case "instructor": //4a. Fall (case)
     console.log(firstName + " unterrichtet!");
    break;


    default: //// für alle nicht bezeichneten Fälle ...
    console.log(firstName + " macht etwas anderes!");
    break;
}