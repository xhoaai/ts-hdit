
export { };
console.log("lab 06");

// id: số nguyên (number)
// name: chuỗi (string)
// email: chuỗi (string)
// isPremium: true nếu học viên đăng ký gói cao cấp, false nếu thường
// // contact: có thể là email (string) hoặc số điện thoại (number)

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number; //union type
}

const student1: TStudent = {
    id: 134,
    name: "htit",
    email: "hdit@gmail.com",
    isPremium: true,
    contact: "alan@hdit.com"
}

const student2: TStudent = {
    id: 184,
    name: "alan",
    email: "alan@gmail.com",
    isPremium: false,
    contact: 646464613
}

// courseId: số nguyên (number)
// title: tên khóa học (string)
// price: giá gốc (number)
// students: danh sách học viên đã đăng ký -> mang object chua hoc vien

type Tcourse = {
    courseId: number;
    title: string;
    price: number;
    students: TStudent []
}

// const student1: TStudent = {
//     id: 134,
//     name: "htit",
//     email: "hdit@gmail.com",
//     isPremium: true,
//     contact: "alan@hdit.com"
// }

// const student2: TStudent = {
//     id: 184,
//     name: "alan",
//     email: "alan@gmail.com",
//     isPremium: false,
//     contact: 646464613
// }

const myCourse1: Tcourse = {
    courseId: 1,
    title: "Typescritps Pro with hoidanit", 
    price: 490000,
    students: [student1, student2]
}

const myCourse2: Tcourse = {
    courseId: 2,
    title: "React Pro with hoidanit", 
    price: 390000,
    students: [student1, student2]
}

const registerStudentToCourse = (student: TStudent, course: Tcourse) => {
    course.students.push(student);
    //return course;
}

//4. Viet ham printCourseInfo(course)
// chuc nang:
// In ra ten khoa hoc va so hoc vien da dang ky.
// Neu chua co hoc vien -> in " Chua co hoc vien nao"
// Neu co hoc vien -> Liet ke ten tung hoc vien.

const printCourseInfo = (course: TCourse) => {
    console.log(`
Ten khoa hoc: ${course.title}
So hoc vien da dang ky: ${course.students.length}
        
        `);
        if(course.students.length === 0){
            console.log("chua co hoc vien nao")
        }else {
            //["hoidanit", "alan", "bla bla"]
            const studentList = course.students.map(item => item.name)
            console.log("Liet ke ten tung hoc vien: ", studentList.join(","))
        }
}

registerStudentToCourse(student1, myCourse1);
registerStudentToCourse(student2, myCourse2);
printCourseInfo(myCourse1);
console.log("=================")
printCourseInfo(myCourse2;