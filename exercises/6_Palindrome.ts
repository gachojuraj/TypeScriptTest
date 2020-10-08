export function checkPalindrome(str:string):boolean{
    return (str.toLowerCase().split('').reverse().join('') == str.toLowerCase());
}