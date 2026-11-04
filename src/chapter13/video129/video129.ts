export { };
console.log("video 129");

interface IDataString {
    data: string;
}

interface IDataNumber {
    data: number;
}

interface IData<T> {
    data: T
}

const a: IData<string> = { data: "hdit" }

const b: IData<number> = { data: 123 }

interface APIResponse<T> {
    status: number;
    data: T
}

interface IUser {
    id: number;
    name: string;
    email: string;

}

const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = await res.json() as IUser[];

    const result: APIResponse<IUser[]> = {
        status: 200,
        data: dataAPI

    }

}