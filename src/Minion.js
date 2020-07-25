class Minion {
  constructor() {
    this.isDefeated = false;
  }

  takeDamage(player) {
    this.hp -= player.atkPower;
    if(this.hp <= 0) { this.isDefeated = true }
  };
};
