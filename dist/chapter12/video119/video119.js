"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 118");
class Dog {
    makeSound() {
        console.log("con cho keu go go ...");
    }
}
class Cat {
    makeSound() {
        console.log("con meo keu meo meo ...");
    }
}
class Pig {
    makeSound() {
        console.log("con lon ke un in ...");
    }
}
const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();
const myZoo = [myDog, myCat, myPig];
myZoo.forEach((animal, index) => {
    animal.makeSound();
});
