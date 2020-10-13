import {Item} from 'classes/Item'

export class Warrior{
    name: string;
    life: number;
    speed: number;
    muscle: number;
    items: Array<Item>;

    constructor (name:string, life:number, speed: number, muscle: number, items: Item[]) {
        this.name = name;
        this.life = life;
        this.speed = speed;
        this.muscle = muscle;
        this.items = items;
        this.items.sort((n1,n2) => n1.getValue() - n2.getValue());
    }


    public getTotalForce(): number{
        return this.speed+this.muscle+this.life;
    }

    public moveItem(warrior: Warrior){
        this.items.sort((n1,n2) => n1.getValue() - n2.getValue());
        let item: Item = this.items.pop();
        if (item == null) return;
        warrior.items.push(item);
    }

    public damage(){
        this.life--;
    }
}