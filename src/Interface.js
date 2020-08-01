$(document).ready(function() {
  var game =  new Game()

  setup()

  $('#minion_0').on('mousedown', function() { attackMinion('#minion_0') });
  $('#minion_1').on('mousedown', function() { attackMinion('#minion_1') });
  $('#minion_2').on('mousedown', function() { attackMinion('#minion_2') });

  $('#boss').on('click', function() {
    game.attackBoss();
    update()
  });

  window.setInterval(function(){
    update();
  }, 1000);

  function update() {
    Api.get()
    //console.log(game.boss.currentHealth());
    $('#boss_hp').width(game.boss.currentHealth())
    $("#content").text(Api.bossCurrentHealth)
    //$('#boss_hp').text(game.boss.hp)

    $('#minion_hp_0').width(game.minions[0].currentHealth())
    $('#minion_hp_1').width(game.minions[1].currentHealth())
    $('#minion_hp_2').width(game.minions[2].currentHealth())

    $('#player_level').text(game.player.level)
    $('#player_exp').text(game.player.exp)
  }

  function attackMinion(minion) {
    let i = minion.split('').pop()
    console.log(i);

    game.attackMinion(i);

    $(minion).empty();
    $(minion).prepend('<img src="./images/hit.jpg" />')

    $(minion).on('mouseup', function() {
      $(minion).empty();
      $(minion).prepend('<img src="./images/minion.png" />')
    });

    update()
  }

  function setup() {
    $('#boss').prepend('<img src="./images/boss.png" />')
    $('#minion_0').prepend('<img src="./images/minion.png" />')
    $('#minion_1').prepend('<img src="./images/minion.png" />')
    $('#minion_2').prepend('<img src="./images/minion.png" />')
    update()
  }
});
