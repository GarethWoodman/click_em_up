describe("game", function() {
  let game = new Game()

  describe("defeats minion", function() {
    it("increases experience points", function() {
      for (i = 0; i < 10; i++) {
        game.attackMinion();
      }
      expect(game.player.exp).toEqual(1);
    })
  })

  it("raises one level after getting 10 exp", function() {
    game.player.atkPower = 10
    game.player.exp = 9
    game.attackMinion()

    expect(player.level).toEqual(currentLevel + 1)
  })
})
