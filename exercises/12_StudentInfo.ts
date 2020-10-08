import { Student } from 'classes/Student'

let student1: Student = new Student("Sam", 2, 123456, "Legionarska 1, 01001 Zilina");
let student2: Student = new Student("John", 5, 456789, "Legionarska 2, 01001 Zilina");

console.log(student1.getStudentNumber() + ", " + student1.getPhoneNumber() + ", " + student1.getAddress());
console.log(student2.getStudentNumber() + ", " + student2.getPhoneNumber() + ", " + student2.getAddress());