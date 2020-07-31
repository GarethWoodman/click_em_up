$(document).ready(function() {
  var game =  new Game()
  game.boss.calculateHealth()

  $('#minion').prepend('<img src="./images/goomba.png" />')
  update()

  $('#boss').on('click', function() {
    game.attackBoss();
    update()
  });

  $('#minion').on('mousedown', function() {
    game.attackMinion();
    $('#minion').empty();
    $('#minion').prepend('<img src="./images/hit.jpg" />')
    update()
  });

  $('#minion').on('mouseup', function() {
    $('#minion').empty();
    $('#minion').prepend('<img src="./images/goomba.png" />')
  });

  window.setInterval(function(){
    update();
  }, 1000);

  function update() {
    game.api.get()
    game.boss.calculateHealth()
    $('#boss_hp').text(game.boss.hp)
    $('#minion_hp').text(game.minion.hp)
    $('#player_level').text(game.player.level)
    $('#player_exp').text(game.player.exp)
  }
});
