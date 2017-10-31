// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


//Create the Canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// //backgrpund image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
	bgReady = true;
	
};
bgImage.src = "images/background.png";

//Hello image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
	console.log("12")
	heroReady = true;
};
heroImage.src = "images/hero.png";

//Monster image
var MonsterReady = false;
var MonsterImage = new Image();
MonsterImage.onload = function(){
	MonsterReady  = true;
}
MonsterImage.src = "images/Monster.png";

//Game objects
var hero = {
	speed: 256
}
var monster = {};
var monsterCaught = 0;

//Handle keyboard controls
var keyDown = {};

addEventListener("keydown",function(e){
	keyDown[e.keyCode] = true; //将e.keyCode加入keyDown数组
},false);

addEventListener("keyup",function(e){
	delete	keyDown[e.keyCode];//将e.keyCode移除keyDown数组
},false);

//Reset the game when the player catches a monster
var reset = function(){
	hero.x = canvas.width / 2;

	hero.y = canvas.height / 2;
	console.log(hero.y)

	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64)); 
}

var update = function(modifier){
	if(38 in keyDown){ //up
		hero.y -= hero.speed * modifier;
	}
	if(40 in keyDown){ //down
		hero.y += hero.speed * modifier;
	}
	if(37 in keyDown){ //left
		hero.x -= hero.speed * modifier;
	}
	if(39 in keyDown){ //right
		hero.x += hero.speed * modifier;
	}

	//Are they touching?

	if(
		hero.x <= (monster.x + 32)
		&&hero.y <= (monster.y + 32)
		&&monster.x <= (hero.x + 32)
		&&monster.y <= (hero.y + 32)
	){
		++monsterCaught;
		reset();
	};
}

// //Draw everything
var render = function (){
// 	console.log("12")
	if(bgReady){

		ctx.drawImage(bgImage,0,0);
	}

	if(heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if(MonsterReady){
		ctx.drawImage(MonsterImage, monster.x, monster.y);
	}
	requestAnimationFrame(render);

	//score
	ctx.fillstyle = "rgb(250,250,250)";
	ctx.font = "24px Helvetica";
	ctx.textAlingn  = "left";
	ctx.textBaseline  = "top";
	ctx.fillText("Goblins caught: " + monsterCaught,32,32);
}

//the main game loop
var main = function(){
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
}

// Let's play this game!
var then = Date.now();
reset();
main();
