describe("minion", function() {
  let minion = new Minion();

  const maxHP = 10;
  const exp   = 1;

  beforeEach(function() {
    minion.hp  = maxHP;
    minion.exp = exp;
  });

  describe("check HP", function() {
    it("should return HP", function() {
      expect(minion.hp).toEqual(maxHP)
    });

    describe("takes damage", function() {
      let damage = 5;

      it("should reduce HP", function() {
        minion.takeDamage(damage)
        expect(minion.hp).toEqual(maxHP - damage)
      });
    });
  });

  describe("check EXP", function() {
    it("should return EXP", function() {
      expect(minion.exp).toEqual(exp)
    })
  })
})
