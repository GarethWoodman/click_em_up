describe("Player", function() {
  let player         = new Player();
  const damage       = 1;
  const playerHP     = 100;
  const currentLevel = 1;

  let minion     = new Minion();
  const minionHP = 10;
  const exp      = 1;

  beforeEach(function() {
    player.atkPower = damage
    player.hp       = playerHP
    player.exp      = 0;

    minion.hp  = minionHP;
    minion.exp = exp;
  })

  describe("check atkPower", function() {
    it("should return damage", function() {
      expect(player.atkPower).toEqual(damage)
    })
  })

  describe("check HP", function() {
    it("should return HP", function() {
      expect(player.hp).toEqual(playerHP)
    })
  })

  describe("check level", function() {
    it("should return current level", function() {
      expect(player.level).toEqual(currentLevel)
    })
  })
})
