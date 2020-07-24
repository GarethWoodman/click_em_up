var boss = new Boss();
var player = new Player();

function configureBoss(){
  boss.hp = 100;
}

function configurePlayer(){
  player.atkPower = 1;
}

function configureModels(){
  configureBoss();
  configurePlayer();
}

function update() {
  $('#boss_hp_bar').text(boss.hp)
}

$(document).ready(function() {
  configureModels();
  update()

  $('#boss').on('click', function() {
    boss.takeDamage(player.atkPower)
    update()
  });
});
