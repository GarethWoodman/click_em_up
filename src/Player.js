class Player {
  constructor() {
    this.level = 1;
    this.exp = 0;

    this.expIndex = 0;
    this.expTable = [10,13,17,22,29,37,48,63,82,106,138]
  }

  reward(minion){
    this.exp += minion.exp
    if(this.exp >= this.expTable[this.expIndex]){
      this._levelUp();
    }
  }

  _levelUp(){
    this.level += 1
    this.exp = 0
    this.expIndex += 1
  };

  _privateMethd(){
    //do this
    //return this;
  };
};
