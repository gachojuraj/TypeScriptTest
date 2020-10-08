export function checkEnding(str:string, end:string):boolean{
    str = str.split('').reverse().join('');
    end = end.split('').reverse().join('');
    for (let i = 0; i < end.length; i++)
        if (str[i] != end[i]) return false;
    return true;
}