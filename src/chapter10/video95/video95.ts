export { };
console.log("video 95");

type TStudent = {
    id: string;
    name: string;
    address:string;
    age: number;
}

const student1: TStudent = {
    id: "sv1",
    name: "hdit",
    address: "hanoi",
    age: 25
}

const student2: TStudent = {
    id: "sv2",
    name: "alan",
    address: "hanoi",
    age: 25
}

const printInfo = (st: TStudent) => {
    console.log("student name = ", st.name )
}

printInfo(student1);
printInfo(student2);
