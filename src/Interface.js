$(document).ready(function() {
  var game =  new Game()
  update()

  $('#boss').on('click', function() {
    game.attackBoss()
    update()
  });

  $('#minion').on('click', function() {
    game.attackMinion();
    update()
  });

  function update() {
    $('#boss_hp').text(game.boss.hp)
    $('#minion_hp').text(game.minion.hp)
    $('#player_level').text(game.player.level)
    $('#player_exp').text(game.player.exp)

    game.update();
  }
});
