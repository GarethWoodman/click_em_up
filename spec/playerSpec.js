describe("Player", function() {
  let player = new Player();
  const damage = 1;

  beforeEach(function() {
    player.atkPower = damage
  })

  describe("check atkPower", function() {
    it("should return damage", function() {
      expect(player.atkPower).toEqual(damage)
    })
  })
})
