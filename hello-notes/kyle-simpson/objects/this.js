// The keyword "this" represents a variable that points to the execution context of the 
// function. This allows for "dynamic scoping" in a sense, because the keyword "this"
// is determined at execution time NOT authoring time.

// Just looking at the "this aware" ask function, we will have no idea what this is. 
// The keword "this" ONLY cares about where this ask function is executed
function ask(teacher) {
    console.log(teacher, this.question)
}

function askAgain(teacher) {
    "use strict"
    console.log(teacher, this.question);
}

var obj = {
    question: "why is the sky blue?",
    ask: ask,
}

var obj2 = {
    question: "what is your favorite color?",
    ask: ask,
}

// 4 WAYS TO INVOKE A FUNCTION


// 1. Implicit binding

// If a function is called as a method on an object
// Implicitly, the object is bound to the keyword this
obj.ask("Justin");
obj2.ask("Justin")



// 2. Explicit binding

// The .call and .apply function allows passing in a 
// "this" context as the first argument, allowing you to explicitly
// define what the keyword "this" will point to when the ask() function is run
ask.call(obj, "Kyle");
ask.call(obj2, "Kyle");



// 2.5. Hard Binding

// The this binding gets "lost" because setTimeout is the context in which
// ask is invoked.
setTimeout(ask, 10, "Charlie");

// Hard bind a context to refer to the same this context no matter where
// the function is called (but that's kind of the point, so this should be used sparingly, 
// or else think about refactoring to the more predictable module pattern)
setTimeout(ask.bind(obj), 10, "Charlie")
setTimeout(ask.bind(obj2), 10, "Charlie")



// 3. "new" keyword (constructor calls)

// Invokes a function with a "this" binding points to a new 
// empty obj

var newEmptyObj = new ask("Katie");
ask.call({}, "Katie") // same behavior

// "new" keyword does four things
    // 1. Create a brand new empty object
    // 2. Link* to another object 
    // 3. Invoke the function with "this" as the empty object
    // 4. If the function doesn't return anything, assume you meant to return "this"



// 4. Default binding

ask("Rishi"); // this -> global
askAgain("Rishi"); // "strict mode" this -> undefined



// Binding Precedence -- aka how to answer what does the keyword "this" point to?
// new? -> newly created object
// .call? (.apply?) (.bind?) -> whatever explicit object was passed
// context object -> the implicit object the method was called on
// default -> global or error in strict mode