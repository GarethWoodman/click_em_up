class Game {
  constructor(){
    this._createPlayer()
    this._createMinion()
    this._createBoss()

    this.expIndex = 0;
    this.expTable = [10,13,17,22,29,37,48,63,82,106,138]
  }

  update() {
    this._checkMinion();
  }

  attackBoss(){
    this.boss.takeDamage(this.player)
  }

  attackMinion(){
    this.minion.takeDamage(this.player)
  }

  _checkMinion() {
    if(this.minion.isDefeated) {
      this._createMinion();
      this._rewardPlayer()
    }
  }

  _rewardPlayer() {
    this.player.exp += this.minion.exp
    if(this.player.exp === this.expTable[this.expIndex]){
      this._levelUp();
    }
  }

  _levelUp(){
    this.player.level += 1
    this.player.exp = 0
    this.expIndex += 1
  }

  _createMinion() {
    this.minion          = new Minion();
    this.minion.hp       = 10;
    this.minion.exp      = 1;
  }

  _createPlayer() {
    this.player          = new Player();
    this.player.atkPower = 5;
  }

  _createBoss() {
    this.boss            = new Boss();
    boss.hp              = 100;
  }
}
