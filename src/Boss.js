class Boss {
  constructor(maxHP) {
    this.maxHP = maxHP
  }

  currentHealth() {
    return Health.get(this.maxHP, Api.bossCurrentHP)
  }
};
