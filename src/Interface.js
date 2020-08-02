$(document).ready(function() {
  var game =  new Game()
  var damageIndex = 0

  setup()

  $('#minion_0').on('mousedown', function() { attackMinion('#minion_0') });
  $('#minion_1').on('mousedown', function() { attackMinion('#minion_1') });
  $('#minion_2').on('mousedown', function() { attackMinion('#minion_2') });

  $('#boss').on('click', function() {
    game.attackBoss();
    $('#boss').on('mouseup', function(e) {
      showDamage(e)
      $('#boss').unbind('mouseup');
    })
    update()

  });

  $(window).unload(function() {
    Cookies.set("playerExp", game.player.exp)
    Cookies.set("playerLevel", game.player.level)
    Cookies.set("playerAtk", game.player.atkPower)
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

    $('#player_level').html(`<p>Level: ${game.player.level}</p>`)
    $('#player_exp').html(`<p>Exp: ${game.player.exp}</p>`)
  }

  function attackMinion(minion) {
    let i = minion.split('').pop()
    game.attackMinion(i);

    $(minion).empty();
    $(minion).prepend('<img src="./images/hit.jpg" />')

    $(minion).on('mouseup', function(e) {
      $(minion).empty();
      $(minion).prepend('<img src="./images/minion.png" />')
      showDamage(e)
      $(minion).unbind('mouseup');
    });

    update()
  }

  function showDamage(e){
    let damage = new Damage(damageIndex += 1, game.player.atkPower)
    $('#attackNumbers').append(damage.html)
    damage.display(e)
  }

  function setup() {
    $('#boss').prepend('<img src="./images/boss.png" />')
    $('#minion_0').prepend('<img src="./images/minion.png" />')
    $('#minion_1').prepend('<img src="./images/minion.png" />')
    $('#minion_2').prepend('<img src="./images/minion.png" />')
    update()
  }
});
