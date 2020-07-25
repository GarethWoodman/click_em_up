describe("Boss", function() {
  let boss = new Boss();
  const maxHP = 100;

  let player = new Player();
  player.atkPower = 1;

  beforeEach(function() {
    boss.hp = maxHP
  });

  describe("check HP", function() {
    it("should return HP", function() {
      expect(boss.hp).toEqual(maxHP)
    });

    describe("takes damage", function() {
      it("should reduce HP", function() {
        boss.takeDamage(player)
        expect(boss.hp).toEqual(maxHP - player.atkPower)
      });
    });
  });
});
