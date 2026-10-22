"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("lab 06");
const student1 = {
    id: 134,
    name: "htit",
    email: "hdit@gmail.com",
    isPremium: true,
    contact: "alan@hdit.com"
};
const student2 = {
    id: 184,
    name: "alan",
    email: "alan@gmail.com",
    isPremium: false,
    contact: 646464613
};
const student1 = {
    id: 134,
    name: "htit",
    email: "hdit@gmail.com",
    isPremium: true,
    contact: "alan@hdit.com"
};
const student2 = {
    id: 184,
    name: "alan",
    email: "alan@gmail.com",
    isPremium: false,
    contact: 646464613
};
const myCourse1 = {
    courseId: 1,
    title: "Typescritps Pro with hoidanit",
    price: 490000,
    students: [student1, student2]
};
const registerStudentToCourse;
(student, course) => {
    course.students.push(student);
    return course;
};
//4. Viet ham printCourseInfo(course)
// chuc nang:
// In ra ten khoa hoc va so hoc vien da dang ky.
// Neu chua co hoc vien -> in " Chua co hoc vien nao"
// Neu co hoc vien -> Liet ke ten tung hoc vien.
const printCourseInfo = (course) => {
    console.log(`
        Ten khoa hoc: ${course.title}
        So hoc vien da dang ky: ${course.students.length}
        
        `);
    if (course.students.length === 0) {
        console.log("chua co hoc vien nao");
    }
    else {
        //["hoidanit", "alan", "bla bla"]
        const studentList = course.students.map(item => item.name);
        console.log("Liet ke ten tung hoc vien: ", studentList.join(","));
    }
};
const updateCourse1 = registerStudentToCourse(student1, myCourse1);
printCourseInfo(updateCourse1);
