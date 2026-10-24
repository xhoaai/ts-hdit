export { };
console.log("lab 07");

interface IBlog {
    id: number;
    title: string;
    content: string;
    author: string;
}

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");

    const data = await res.json() as IBlog[];

    //check lai hinh thu data (joi, zod ...)

    if (data.length) {
        const tbody = document.querySelector("#blogs tbody")


        data.forEach((blog, index) => {
            tbody!.innerHTML += `
                <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                </tr>`
        })
    }

    console.log(">>> check data: ", data)
}

fetchBlogs();