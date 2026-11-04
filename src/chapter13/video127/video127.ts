export { };
console.log("video 127")

type MyArrString = string[];
type MyArrNumber = number[];

type MyArr<T> = T[];

type Wrapper<T> = {
    data: T
}

const a: MyArr<number> = [0, 1];
const b: MyArr<string> = ["0", "1"];


const c: Wrapper<number> = {
    data: 123
}


const d: Wrapper<string> = {
    data: "123"
}