
	

	var requestAnimFrame = (function(){
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
        	window.setTimeout(callback, 1000 / 60);
        };
	})

	var character_canvas,skeletons_canvas, buffer, context, char_context,skel_context;
	var lastTime;
	var width =1190;
	var height = 715.5;



	var background_canvas = document.getElementById('background-canvas');
	var context = background_canvas.getContext('2d');
	background_canvas.width = width;
	background_canvas.height = height;



	character_canvas = document.getElementById("character");
	skeletons_canvas = document.getElementById("skeletons");

	char_context = character_canvas.getContext('2d');
	skel_context = skeletons_canvas.getContext("2d");
	character_canvas.height=height;
	character_canvas.width=width;
	skeletons_canvas.height=height;
	skeletons_canvas.width=width;


	//var playerName = prompt("What's your name?"); //ask for player name
	//var Player = new CharacterModel(playerName);//create the player's character
	//canvas objects

	resources.load(['background.gif', "Character.gif", "Character2.gif", "Skeleton.gif"]);
	resources.onReady(init);

	//game state
	var player = {
		this.alive = true;
	}


	function main(){
		var now = Date.now();
		var dt = (now - lastTime)/1000.0;

		

		clear();
		updateCharacters(dt);
		render();


		lastTime = now;
		requestAnimFrame(main);
}
















//initial draw
function init(){
	
		context.scale(0.5, 0.5); 
		context.drawImage(resources.get("background.gif"),0,0);

		lasTime = Date.now();
		main();
	}


function updateCharacters(){
	
	char_context.drawImage(resources.get("Character.gif"), 0,0);
	skeletons_context.drawImage(resources.get("Skeleton.gif"), 100, 100 );

}



function clear(){
	character_canvas.width = character_canvas.width;
	skeletons_canvas.width = skeletons_canvas.width;
}






