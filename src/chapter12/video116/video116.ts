export { };
console.log("video 116");

class Cat {
    public name: string;

    private age_: number;

    //setter => setAge
    set age(value: number) {
        this.age_ = value;
    }

    //getter => getName getAge

    get age() {
        return this.age_;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age_ = age;
    }

    makeSoud() {
        console.log("Meo Moe ...");
    }
}

const myCat = new Cat("hdit", 5);

const a = myCat.age;//get
myCat.age = 20;//set

