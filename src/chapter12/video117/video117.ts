export { };
console.log("video 117");

class Parent {
    gold: number | undefined;
    money: number | undefined;

    //method
    shareAHouse() {
        console.log("share a house from parent")
    }


}

class Child extends Parent {
    name: string | undefined;
    shareAHouse() {
        super.shareAHouse();
        console.log("share a house from child")
    }

}

const hdit = new Child();
hdit.shareAHouse();

//1. cha - con

//Animal - Dog
//Person - Student

//Employee - Developer

class Animal { }
class Dog extends Animal {

}