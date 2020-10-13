import { Warrior } from "classes/Warrior";

export function battle(w1: Warrior, w2: Warrior): number{
    if (w1.getTotalForce() == w2.getTotalForce()) return 0;
        if (w1.getTotalForce() > w2.getTotalForce()){
            w2.damage();
            w2.moveItem(w1);
            return 1;
        }
        w1.damage();
        w1.moveItem(w2);
        return 2;
}