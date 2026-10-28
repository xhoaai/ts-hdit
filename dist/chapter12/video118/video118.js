"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 118");
class Bird {
    makeSound() {
        console.log("chim keu chip chip");
    }
    doFly() {
        console.log("chim bay bang canh");
    }
}
const myBird = new Bird();
myBird.makeSound();
myBird.doFly();
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, name, id) {
        super(id, name);
        this.skill = skill;
    }
}
const hdit = new LapTrinhVien("typescript", "alan", 123);
