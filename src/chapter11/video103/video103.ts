export { };
console.log("video 103")


interface Iperson {
    name: string;
    age: number;
    address?: string; //optional
    readonly language: string;
    sayHi: () => void;
}

const user: Iperson = {
    age: 25,
    name: "alan",
    language: "vn",
    sayHi: () => console.log("Im user 1 khong phai toi")
}

const user1: Iperson = {
    age: 25,
    name: "alan",
    address: "hanoi",
    language: "vn",
    sayHi: () => console.log("Im user 1 update baba")
}

user.sayHi()