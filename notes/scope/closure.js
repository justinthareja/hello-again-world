// Closure references the variable itself, not just a snapshot

// Nice definition based on observable behavior
// Closure is when a function "remembers" its lexical scope even when it's
// executed outside of that lexical scope.

var teacher = "kyle"

function logTeacher() {
    console.log(teacher);
}

teacher = "Justin"
logTeacher(); // ??
