

export { };
console.log("video 93");

//union
let username: string | number ="hdit@gmail.com"; // email

username = 123456; // id

username = "0123456789"; //phone number

const name ="bla bla";
name.toUpperCase();

const printfUsername = (username: string | number) => {
    if(typeof(username)==="string")
    console.log("my username = ", username.toUpperCase())
}

printfUsername("hdit with alan");