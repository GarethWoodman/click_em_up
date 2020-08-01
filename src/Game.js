class Game {
  constructor(){
    this.api = new Api()
    this._createPlayer()
    this._createMinion()
    this._createBoss()
  }

  attackBoss(){
    this.api.updateBossHealth(this.player.atkPower)
  }

  attackMinion(){
    this.minion.takeDamage(this.player)
    this._checkMinion();
  }

  _checkMinion() {
    if(this.minion.isDefeated) {
      this.player.reward(this.minion)
      this._createMinion();
    }
  }
  _createMinion() {
    this.minion     = new Minion();
    this.minion.hp  = 10;
    this.minion.exp = 1;
  }

  _createPlayer() {
    this.player          = new Player();
    this.player.atkPower = 5;
  }

  _createBoss() {
    this.boss    = new Boss(this.api);
    this.boss.hp = 100;
  }
}
