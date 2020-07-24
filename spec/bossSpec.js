describe("Boss", function() {
  let boss = new Boss();
  const maxHP = 100;

  beforeEach(function() {
    boss.hp = maxHP
  });

  describe("check HP", function() {
    it("should return HP", function() {
      expect(boss.hp).toEqual(maxHP)
    });

    describe("takes damage", function() {
      let damage = 5;

      it("should reduce HP", function() {
        boss.takeDamage(damage)
        expect(boss.hp).toEqual(maxHP - damage)
      });
    });
  });
});
