
function doFirst(){
	barSize = 586;

	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	stopButton = document.getElementById('stopButton');
	upButton = document.getElementById('upButton');
	downButton = document.getElementById('downButton');
	mutueButton = document.getElementById('mutueButton');
	document.getElementById('message').innerHTML = "Volume: "+ (myMovie.volume*100) +"%";
	document.getElementById('duration').innerHTML = myMovie.currentTime+"/"+parseInt(myMovie.duration/60)+":"+(myMovie.duration%60);

	playButton.addEventListener('click',playOrPause,false);
	defaultBar.addEventListener('click',clicked,false);
	myMovie.addEventListener('click',playOrPause,false);
	stopButton.addEventListener('click',stop,false);
	upButton.addEventListener('click',volumeUp,false);
	downButton.addEventListener('click',volumeDown,false);
	mutueButton.addEventListener('click',volumeMutue,false);
	

}
function playOrPause(){
	
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML = 'Play';
		
	}else{
		myMovie.play();
		playButton.innerHTML = 'Pause';
		setInterval(update,500);
		
	}
}
function update(){
	document.getElementById('message').innerHTML = "Volume: "+ parseInt(myMovie.volume*100) +"%";
	document.getElementById('duration').innerHTML = parseInt(myMovie.currentTime/60)+":"+parseInt(myMovie.currentTime%60)+"/"+parseInt(myMovie.duration/60)+":"+(myMovie.duration%60);
	
	if(!myMovie.ended){
		var size = barSize / myMovie.duration * myMovie.currentTime;
		progressBar.style.width = size + "px";
	}else{
		progressBar.style.width = "0px";
		playButton.innerHTML = 'Play';
	}
}

function clicked(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	var newTime = mouseX/ (barSize / myMovie.duration);
	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX + "px";
	document.getElementById('duration').innerHTML = parseInt(myMovie.currentTime/60)+":"+parseInt(myMovie.currentTime%60)+"/"+parseInt(myMovie.duration/60)+":"+(myMovie.duration%60);

}
function stop(){
	myMovie.currentTime = 0;
	myMovie.pause();
	playButton.innerHTML = 'Play';
}

function volumeUp(){
	if(parseInt(myMovie.volume*100)>=90){
		myMovie.volume = 1;
	}else{
		myMovie.volume += 0.1;
	}
	document.getElementById('message').innerHTML = "Volume: "+ parseInt(myMovie.volume*100) +"%";
	
}

function volumeDown(){
	if(parseInt(myMovie.volume*100)<=10){
		myMovie.volume = 0;
	}else{
		myMovie.volume -= 0.1;
	}
	document.getElementById('message').innerHTML = "Volume: "+ parseInt(myMovie.volume*100) +"%";
}

function volumeMutue(){
	myMovie.volume = 0;
	document.getElementById('message').innerHTML = "Volume: "+ parseInt(myMovie.volume*100) +"%";
}


window.addEventListener('load',doFirst,false);
