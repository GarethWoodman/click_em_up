class Game {
  constructor(){
    this._createPlayer()
    this._createMinions()
    this._createBoss()
  }

  attackBoss(){
    Api.updateBossHealth(this.player.atkPower)
  }

  attackMinion(i){
    this.minions[i].takeDamage(this.player)
    this._checkMinion(i);
  }

  _checkMinion(i) {
    if(this.minions[i].isDefeated) {
      this.player.reward(this.minions[i])
      this.minions[i] = new Minion(10, 1)
    }
  }
  _createMinions() {
    this.minions = []
    this.minions.push(new Minion(10, 1))
    this.minions.push(new Minion(100, 1))
    this.minions.push(new Minion(100, 1))
  }

  _createPlayer() {
    this.player          = new Player();
    this.player.atkPower = 1;
  }

  _createBoss() {
    this.boss = new Boss(1000);
  }
}
