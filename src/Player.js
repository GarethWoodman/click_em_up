class Player {
  constructor() {

    this.expTable = [10,13,17,22,29,37,48,63,82,106,138]

    if(Cookies.get('playerLevel')){
      this.level = parseInt(Cookies.get('playerLevel'))
    } else {
      this.level = 1
    }

    if(Cookies.get('playerExp')){
      this.exp = parseInt(Cookies.get('playerExp'))
    } else {
      this.exp = 0
    }
  }

  reward(minion){
    this.exp += minion.exp
    if(this.exp >= this.expTable[this.level - 1]){
      this._levelUp();
    }
  }

  _levelUp(){
    this.level += 1
    this.exp = 0
    this.atkPower += 2
  };

  _privateMethd(){
    //do this
    //return this;
  };
};
