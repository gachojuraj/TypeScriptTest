export function differenceMaxMin(arr:number[]):number{
    arr.sort((n1,n2) => n1 - n2);
    return Math.abs(arr[arr.length-1] - arr[0]);
}