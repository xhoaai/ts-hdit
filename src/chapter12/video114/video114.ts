export { };
console.log("video 114");

class Person {
    name: string;
    age: number;

    //ham tao
    constructor();
    constructor(name: string, age: number)
    constructor(name?: string, age?: number) {
        this.name = name ?? "unknown";
        this.age = age ?? 0;

    }
}

const hdit = new Person("alan", 25);
console.log("my name is : ", hdit.name, "and age = ", hdit.age)

const hdit1 = new Person();
console.log("my name2 is : ", hdit1.name, "and age2 = ", hdit1.age)