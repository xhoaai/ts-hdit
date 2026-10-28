export { };
console.log("video 120");

abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;

    test() {
        console.log("do a test: ", this.name)
    }
}

class Dog extends Animal {
    makeSound(): void {
        //throw new Error("Method not implemented");
        console.log("con cho keu go go ...")
    }

}

const myDog = new Dog("cute dog");
myDog.test();
myDog.makeSound();