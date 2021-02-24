// think of a generator as a pauseable function
function* gen() {
    console.log("hello");
    yield; // generator decides when it pauses. locally blocked.
    console.log("world");
}

var it = gen(); // invoking gen() does not execute any code

it.next(); // generator is run up to the first yield keyword.

it.next(); // generator is run to completion. there can be other code between this and line 10

