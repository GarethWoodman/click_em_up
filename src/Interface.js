$(document).ready(function() {
  var boss = new Boss();
  boss.hp = 100;

  update()

  $('#boss').on('click', function() {
    boss.takeDamage(5)
    update()
  });

  function update() {
    $('#boss_hp_bar').text(boss.hp)
  }
});
