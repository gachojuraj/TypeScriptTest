import { Shiritori } from 'classes/Shiritori';

export function testShiritori(){
    let shiri: Shiritori = new Shiritori;

    shiri.runGame(["word", "dowry", "yodel", "leader", "righteous", "serpent"])
    shiri.runGame(["motive", "beach", "event"])
    shiri.runGame(["hive", "eh", "hive"])
}
