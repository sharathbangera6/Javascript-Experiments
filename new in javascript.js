function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function() {
    return 'I am Saying ' + this.saying;
}

var cR = new Person('Something');
console.log('new', cR.talk());

function spawn(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    constructor.apply(obj, Array.prototype.slice.apply(arguments).slice(1));
    return obj;
}

var c = spawn(Person, 'Nothing');
console.log('spawn', c.talk());
