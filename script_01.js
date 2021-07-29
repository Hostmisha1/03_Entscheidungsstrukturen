// Entscheidungsstrukturen | control structures

//Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Assigment (Wertzuweisung)
ageJohn = 35;
ageMark = 30;

// Test | Logisch Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);


// Ausgabe
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);


/******** IF ********/
// TINA --> There is no alternative!
//entweeder JA oder nix ... alternativlos

// if (condition)
// if (true)
// if (false)
if(isJohnOlder) //(ageJohn > ageMark) geht auch

{   //Ja-Zweig / true
    console.log("John ist älter");
}
else {
    // Nein -Zweig /false
    console.log("John ist jünger. ");
}