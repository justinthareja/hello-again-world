// wrapper to be able to say run() instead of it.next()
function coroutine(g) {
    var it = g();
    return function() {
        return it.next.apply(it, arguments);
    }
}

var run = coroutine(function* () {
    // for async, think from the perspective from the inside of the generator

    var x = 1 + (yield); // x = 11
    var y = 1 + (yield); // y = 31

    yield (x + y);
});


var out = run();
console.log(out); // { value: undefined, done: false }

out = run(10);
console.log(out); // { value: undefind, done: false }

// generators don't ever have to finish
// will just get garbage collected when there's no more reference
out = run(30);
console.log(out.value); // 42