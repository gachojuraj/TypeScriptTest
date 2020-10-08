import { Person } from 'classes/Person';

export function getSum(arr:Person[]):number{
    let sum: number = 0;
    arr.forEach(function (person){ sum += person.getBudget()})
    return sum;
}