// Closure is when a function "remembers" its lexical scope even when it's
// executed outside of the function's lexical scope.

// Closure references the variable itself, not just a snapshot

var teacher = "kyle"

function logTeacher() {
    console.log(teacher);
}

teacher = "Justin"
logTeacher(); // ??


// CLOSURE - LOOPS

// If you need multiple different values being closed over,
// you need multiple different variables. 
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`i: ${i}`);
    }, i * 1000);
}

// In this case
// since let is block scoped, each i is declared in its own "scope"
// and can be treated as an individual variable
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(`i: ${i}`);
    }, i * 1000);
}