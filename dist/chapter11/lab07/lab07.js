console.log("lab 07");
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    //check lai hinh thu data (joi, zod ...)
    if (data.length) {
        const tbody = document.querySelector("#blogs tbody");
        data.forEach((blog, index) => {
            tbody.innerHTML += `
                <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                </tr>`;
        });
    }
    console.log(">>> check data: ", data);
};
fetchBlogs();
export {};
