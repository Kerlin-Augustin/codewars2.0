// https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }

  isWorthIt() {
    if (this.draft - (this.crew * 1.5) > 20){
      return true
    } else {
      return false
    }
  }
}