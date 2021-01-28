// Lexical This

// Arrow functions do not define a this, so it behaves like any other variable
// When this is not defined, it will use lexical scoping rules to determine it's value

// To answer "what is this in the arrow function", just ask "what is this in the parent scope?"
// Repeat until you find something
var workshop = {
    teacher: "kyle",
    ask: function ask (question) {
        setTimeout(() => {
            console.log(this.teacher, question)
        }, 10)
    }
}

// This is where ask's "this" value gets set
workshop.ask("Is this Lexical this?");





var workshop2 = {
    teacher: "justin",
    ask: (question) => {
        console.log(this.teacher, question);
    }
}

workshop2.ask("How does this work?")
workshop2.ask.call(workshop2, "Still no this?")

// Only use arrow functions to take advantage of lexical this