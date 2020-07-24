class Minion {
  constructor() {
    this.isDefeated = false;
  }

  takeDamage(damage) {
    this.hp -= damage;
    if(this.hp <= 0) { this.isDefeated = true }
  };

  _privateMethd(){
    //do this
    //return this;
  };
}
