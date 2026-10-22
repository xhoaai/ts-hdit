
export { };
console.log("video 94")


const person: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean;
} = {
    name: "hdlt",
    age: 25,
    address: "hanoi",
    isHandsome: true
}

const printInfo = (people: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean
}) => {
    console.log("your name's: ",people.name)
    console.log("your age's: ",people.age)
    console.log("your address's: ",people.address)
}

printInfo(person)