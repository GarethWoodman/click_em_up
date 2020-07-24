class Minion {
  constructor() {
    this.isDefeated = false;
  }

  takeDamage(player) {
    this.hp -= player.atkPower;
    if(this.hp <= 0) { this._rewards(player) }
  };

  _rewards(player){
    this.isDefeated = true
    player.exp += this.exp
  };
}
