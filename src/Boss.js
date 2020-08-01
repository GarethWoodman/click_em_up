class Boss {
  constructor() {
    this.maxHP = 1000
  }

  currentHealth() {
    return (100 / this.maxHP) * Api.bossCurrentHealth
  }
};
