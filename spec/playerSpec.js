describe("Player", function() {
  let player = new Player();

  const damage = 1;
  const maxHP  = 100;

  beforeEach(function() {
    player.atkPower = damage
    player.hp = maxHP
  })

  describe("check atkPower", function() {
    it("should return damage", function() {
      expect(player.atkPower).toEqual(damage)
    })
  })

  describe("check HP", function() {
    it("should return HP", function() {
      expect(player.hp).toEqual(maxHP)
    })
  })
})
