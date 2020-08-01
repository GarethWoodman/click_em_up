class Health {
  static get(maxHP, currentHP) {
    return (100 / maxHP) * currentHP
  }
}
