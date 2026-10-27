"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 114");
class Person {
    constructor(name, age) {
        this.name = name ?? "unknown";
        this.age = age ?? 0;
    }
}
const hdit = new Person("alan", 25);
console.log("my name is : ", hdit.name, "and age = ", hdit.age);
const hdit1 = new Person();
console.log("my name2 is : ", hdit1.name, "and age2 = ", hdit1.age);
