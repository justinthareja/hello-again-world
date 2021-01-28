function log(...args) {
    console.log(...args);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function identityf(cb) {
    return function(...args) {
        return cb(...args);
    }
}

// var three = identityf(3);
// log(three()); // 3


function addf(a) {
    return function(b) {
        return a + b;
    }
}

// log(addf(3)(4)); // 7

function liftf(binary) {
    return function (first) {
        return function (second) {
            return binary(first, second);
        } 
    }
}

// var addf = liftf(add);
// log(addf(3)(4)); // 7
// log(liftf(mul)(5)(6)); // 30

function curry(binary, first) {
    return function(second) {
        return binary(first, second);
    }
}

// Extra credit:
// function curry(binary, first) {
//     return liftf(binary)(first);
// }

// curry with any number of arguments
// function curry(func, ...first) {
//     return function(...second) {
//         return func(...first, ...second);
//     }
// }

// var add3 = curry(add, 3);
// log(add3(4)) // 7
// log(curry( mul, 5)(6)) // 30

// ********* First Rule of FP *********************
// **** Let the functions do the work *************

var inc;
inc = addf(1);

// log ("using addf")
// log(inc(5)) // 6
// log(inc(inc(5))) // 7


inc = curry(add, 1);

// log("using curry");
// log(inc(5)) // 6
// log(inc(inc(5))) // 7

inc = liftf(add)(1);

// log("using liftf")
// log(inc(5)) // 6
// log(inc(inc(5))) // 7

function twice(binary) {
    return function(arg) {
        return binary(arg, arg);
    }
}

// log(add(11, 11)) // 22
var doubl = twice(add);
// log(doubl(11)) // 22
var square = twice(mul);
// log(square(11)) // 121


function reverse(cb) {
    return function(x, y) {
        return cb(y, x);
    }
}

// function reverse(cb) {
//     return function (...args) {
//         return cb(...args.reverse());
//     }
// }

var bus = reverse(sub);

// log(bus(3, 1))

function composeu(...cbs) {
    return function(...args) {
        return cbs.reduce((result, cb) => cb(result), ...args);
    }
}

// log(composeu(doubl, square)(5)) // 100

function composeb(f, g) {
    return function(a, b, c) {
        return g(f(a, b), c);
    }
}

// log(composeb(add, mul)(2, 3, 7)) // 35

function limit(binary, n) {
    var count = 0;

    return function(a, b) {
        if (count < n) {
            count++;
            return binary(a, b);
        }
    }
}

var add_ltd = limit(add, 1);

// log(add_ltd(3, 4)) // 7x
// log(add_ltd(3, 4)) // undefined
