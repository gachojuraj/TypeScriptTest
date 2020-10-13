import { Employee } from 'classes/Employee'
import { JobPosition } from 'classes/JobPosition'

export function testEmployee(){
    let employee: Employee = new Employee("Jozko", "Mrkvicka", 
    new Date("1990-4-7"), new JobPosition("IT Programmer", 2100));

    console.log(employee.getName() + ", " + employee.getSurname() + ", " + 
    employee.getJobPosition().name + ", " + employee.getJobPosition().salary);
}
