describe("minion", function() {
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

  describe("check HP", function() {
    it("should return HP", function() {
      expect(minion.hp).toEqual(minionHP)
    });

    describe("takes damage", function() {
      it("should reduce HP", function() {
        minion.takeDamage(player)
        expect(minion.hp).toEqual(minionHP - damage)
      });
    });
  });

  describe("check EXP", function() {
    it("should return EXP", function() {
      expect(minion.exp).toEqual(exp)
    })
  })

  describe("check if defeated", function() {
    it("returns true if HP is 0 or below", function() {
      for (i = 0; i < 10; i++) {
        minion.takeDamage(player)
      }
      expect(minion.isDefeated).toBeTrue();
    })
  })
})
