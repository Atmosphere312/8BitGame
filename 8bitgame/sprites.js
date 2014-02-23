	




function characterSprite(){
	var keyState = input.handleInput();
	if(keyState === false){
		return document.getElementById("charactergif1");
	}
	else if(keyState===true){
		return document.getElementById("charactergif2")
	}
}

function skeletonSprite(num){
	if(num==0){
		return document.getElementById("skeletongif1");
	}
	else if(num==1){
		return document.getElementById("skeletongif2");
	}
}

