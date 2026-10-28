"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 116");
class Cat {
    //setter => setAge
    set age(value) {
        this.age_ = value;
    }
    //getter => getName getAge
    get age() {
        return this.age_;
    }
    constructor(name, age) {
        this.name = name;
        this.age_ = age;
    }
    makeSoud() {
        console.log("Meo Moe ...");
    }
}
const myCat = new Cat("hdit", 5);
const a = myCat.age; //get
myCat.age = 20; //set
