export function warOfNumbers(arr:number[]):number{
    let even = arr.filter(function (element){ return element % 2 == 0});
    let odd = arr.filter(function (element){ return element % 2 != 0});
    let oddSum: number = 0, evenSum: number = 0;
    odd.forEach(function (i) { oddSum += i});
    even.forEach(function (i) { evenSum += i});
    return Math.abs(evenSum - oddSum);
}