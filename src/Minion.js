class Minion {
  constructor(maxHP, exp) {
    this.maxHP      = maxHP
    this.hp         = maxHP
    this.exp        = exp
    this.isDefeated = false;
  }

  takeDamage(player) {
    this.hp -= player.atkPower;
    if(this.hp <= 0) { this.isDefeated = true }
  };

  currentHealth() {
    return Health.get(this.maxHP, this.hp)
  }
};
