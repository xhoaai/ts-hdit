export { };
console.log("video 130");

// function logLength1<T>(value: T){
// console.log(value.length);
// }

function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

const a = "hdit";

logLength("hdit");
logLength([1, 2, 3]);
//logLength(123);

interface IUser {
    id: number;
    name: string;
}

function testInterface<T extends IUser>(value: T) {
    console.log(value)
}

testInterface({ id: 1, name: "hdit" })
testInterface({ id: 1, name: "hdit", age: 25 })
// testInterface({ id: 1 })
// testInterface({ name: "hdit" })

//rang buoc voi class

class Animal {
    move() {
        console.log("moving ...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! ...");
    }
}

function testClass<T extends Animal>(value: T) {
    console.log(value)

    if (value instanceof Dog) {
        value.bark()
    }
}

const a1 = new Dog();
const b1 = new Animal();

testClass(b1)
testClass(a1)