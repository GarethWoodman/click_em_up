class Damage {
	constructor(id, damage) {
  	this.damage = "#damage_" + id.toString()
    console.log(damage.toString());
  	this.html = `<p style="z-index:10; position:absolute; left: -50px; opacity: 100"; class="damage_points" id="damage_${id}">${damage}</p>`
  }

  display(e){
    var opacity = 1
    var coords = {x: e.pageX, y: e.pageY -= 40}
    var damage = this.damage
		var refreshId = setInterval(function() {
    	opacity -= 0.01
      let cpos = { top: coords.y -= 1, left: coords.x };
      $(damage).offset(cpos)
      $(damage).css("opacity", opacity);
      if (opacity <= 0) {
      	$(damage).remove();
      	clearInterval(refreshId);
      }
  	}, 16);
  }
}
