export { };
console.log("video 126");

function merge<T, U>(a: T, b: U) {
    return [a, b]
}

const a = merge<string, number>("hdit", 15)
const b = merge<string, string>("hdit", "alan")
const c = merge<string, boolean>("hdit", true)