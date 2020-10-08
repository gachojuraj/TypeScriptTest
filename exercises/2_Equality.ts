export function equal(a:number, b:number, c:number):number{
    if (a == b || a == c || b == c)
            return (b == c && b == a) ? 3 : 2;
        return 0;
}