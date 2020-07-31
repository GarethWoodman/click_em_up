class Boss {
  constructor(api) {
    this.api = api
    this.maxHP = 1000
  }

  takeDamage(player) {
    this.api.patch(player.atkPower)
    this.calculateHealth()
  };

  calculateHealth() {
    let bossHealth = (100 / this.maxHP) * this.api.number
    $('#health').width(bossHealth)
  }
};
