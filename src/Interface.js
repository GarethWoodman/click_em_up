function spawnBoss(){
  var boss = new Boss();
  boss.hp = 100;

  return boss;
}

function spawnPlayer(){
  var player = new Player();
  player.atkPower = 1;

  return player;
}

function spawnMinion(){
  var minion = new Minion();
  minion.hp = 10;
  minion.exp = 1;

  return minion;
}

$(document).ready(function() {
  var boss = spawnBoss();
  var player = spawnPlayer();
  var minion = spawnMinion();

  update()

  $('#boss').on('click', function() {
    boss.takeDamage(player.atkPower)
    update()
  });

  $('#minion').on('click', function() {
    minion.takeDamage(player)
    update()
  });

  function update() {
    $('#boss_hp').text(boss.hp)
    $('#minion_hp').text(minion.hp)
    $('#player_level').text(player.level)
    $('#player_exp').text(player.exp)

    if(minion.isDefeated) { killMinion() }
  }

  function killMinion() {
    minion = spawnMinion();
  }
});
