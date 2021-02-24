function* gen() {
    yield 1; // a generator can message data to the outside world by yielding a value
    yield 2;
    yield 3;
    
    return 4;
}

var it = gen();

var message = it.next(); 
console.log(message); // { value: 1, done: false }

message = it.next();
console.log(message); // { value: 2, done: false }

message = it.next();
console.log(message); // { value: 3, done: false }

message = it.next();
console.log(message); // { value: 4, done: true }

