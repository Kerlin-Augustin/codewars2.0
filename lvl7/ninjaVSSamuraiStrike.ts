// https://www.codewars.com/kata/517b0f33cd023d848d000001/train/typescript

export class Warrior {
  private name: string;
  public health: number;
  constructor(name: string) {
    this.name = name;
    this.health = 100;
  }
  strike(enemy: Warrior, swings: number) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));
  }
}