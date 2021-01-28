function log(...args) {
    console.log(...args);
}

function funky(o) {
    // o now references the value null
    o = null;
}

var x = [];
// Pass a reference to the contents of the variable
funky(x);
log(x);


// Same behavior
function swap(a, b) {
    var tmp = a;
    // a now points to what b was pointing to, but doesn't actually change the value
    a = b;
    b = tmp;
}

var x = 1, y = 2;
swap(1, 2);
log(x);
