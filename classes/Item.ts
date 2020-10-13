export class Item{
    name: string;
    value: number;

    public getName(): string {
        return this.name;
    }

    public getValue(): number {
        return this.value;
    }

    constructor (name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}