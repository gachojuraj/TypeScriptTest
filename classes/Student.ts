export class Student{
    private name: string;
    private studentNumber: number;
    private phoneNumber: number;
    private address: string;
    constructor (name: string, studentNumber: number, phoneNumber: number, address: string){
        this.name = name;
        this.studentNumber = studentNumber;
        this. phoneNumber = phoneNumber;
        this.address = address;
    }
    public getName(){
        return this.name;
    }
    public getStudentNumber(){
        return this.studentNumber;
    }
    public getPhoneNumber(){
        return this.phoneNumber;
    }
    public getAddress(){
        return this.address;
    }
}