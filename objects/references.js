let number1 = 1;

let number2 = 1;

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2); // true, same reference
console.log(object2 == object3); // false, not the same object


