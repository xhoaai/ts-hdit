"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 120");
class Animal {
    constructor(name) {
        this.name = name;
    }
    test() {
        console.log("do a test: ", this.name);
    }
}
class Dog extends Animal {
    makeSound() {
        //throw new Error("Method not implemented");
        console.log("con cho keu go go ...");
    }
}
const myDog = new Dog("cute dog");
myDog.test();
myDog.makeSound();
