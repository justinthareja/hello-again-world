// wrapper to be able to say run() instead of it.next()
function coroutine(g) {
    var it = g();
    return function () {
        return it.next.apply(it, arguments);
    }
}

function getData(d) {
    setTimeout(function() { run(d); }, 1000);
}

var run = coroutine(function* () {
    // synchronous looking async flow
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var result = (yield getData(`the meaning of life is ${x + y}`));
    console.log(result);
});

run();