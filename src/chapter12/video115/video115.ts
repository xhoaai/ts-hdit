export { };
console.log("video 115");

class Animal {
    //fields
    //name: string;
    public name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;

    }
    //method
    makeSound() {
        console.log("bla bla with id = ", this.id)
    }

}

const myDog = new Animal("dog", 100);
console.log("animal name = ", myDog.name, "and id = ");
myDog.makeSound();