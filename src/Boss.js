class Boss {
  constructor(api) {
    this.api = api
    this.maxHP = 1000
    this.damage = 0
  }

  currentHealth() {
    return (100 / this.maxHP) * this.api.bossCurrentHealth
  }
};
