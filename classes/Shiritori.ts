export class Shiritori{
    words: string[] = [];
    gameOver: boolean = false;

    public runGame(arr: string[]) {
        arr.forEach(str => {
            console.log(this.play(str));
            if (this.gameOver) return;
        });
    }
    public play(str: string): string{
        this.words.forEach(el => {if (el == str){ this.gameOver = true; return "Game Over"; }});
        let comp: string = this.words.pop();
        if (this.words.length > 0 && comp.split('').reverse()[0] != str.split('')[0]){
            this.gameOver = true;
            return "Game Over";
        }
        this.words.push(comp);
        this.words.push(str);
        return("Correct word. Used words:" + this.getWords());
    }
    getWords(): string{
        return this.words.join(' ')
    }
}