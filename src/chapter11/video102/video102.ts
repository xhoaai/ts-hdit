export { };

console.log("video 102");

type TUsername = string | number; //union type => dung dau hoac

type TStudent = {
    id: number;
    name: string;

}

type TCoder {

    address: string;
    language: string
}

//intersection
type TProgrammer = TStudent & TCoder;

const hdit: TProgrammer = {
    id: 1212,
    name: "alan",
    address: "hanoi",
    language: "typescript"
}

let username = "alan";
username = 12345;