export { };
console.log("video 118")

interface IAnimal {
    makeSound(): void;
}


}

class Dog implements IAnimal {

    makeSound(): void {
        console.log("con cho keu go go ...")

    }
}

class Cat implements IAnimal {

    makeSound(): void {
        console.log("con meo keu meo meo ...")

    }
}

class Pig implements IAnimal {

    makeSound(): void {
        console.log("con lon ke un in ...")

    }
}

const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();

const myZoo: IAnimal[] = [myDog, myCat, myPig];

myZoo.forEach((animal, index) => {
    animal.makeSound()

})
