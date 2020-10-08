import { Triangle } from 'classes/Triangle'

export function getArea(triangle: Triangle): number{
    let s: number = (triangle.a + triangle.b  + triangle.c)/2;
    return (Math.sqrt(s*(s-triangle.a)*(s-triangle.b)*(s-triangle.c)));
}
export function getPerimeter(triangle: Triangle): number{
    return triangle.a + triangle.b + triangle.c;
}