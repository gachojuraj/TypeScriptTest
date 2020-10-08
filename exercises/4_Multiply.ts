export function multiplyByLength(arr:number[]): number[]{
    for (let i = 0; i < arr.length; i++) arr[i] *= arr.length;     
    return arr;
}