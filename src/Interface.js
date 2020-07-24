var boss   = new Boss();
var player = new Player();
var minion = new Minion();

function configureBoss(){
  boss.hp = 100;
}

function configurePlayer(){
  player.atkPower = 1;
}

function configureMinion(){
  minion.hp = 10;
}

function configureModels(){
  configureBoss();
  configurePlayer();
  configureMinion();
}

$(document).ready(function() {
  configureModels();
  update()

  $('#boss').on('click', function() {
    boss.takeDamage(player.atkPower)
    update()
  });

  $('#minion').on('click', function() {
    minion.takeDamage(player.atkPower)
    update()
  });

  function update() {
    $('#boss_hp_bar').text(boss.hp)
    $('#minion_hp_bar').text(minion.hp)
  }
});
