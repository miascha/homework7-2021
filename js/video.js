var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	});

document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate-=0.05;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate+=0.05;
});

document.querySelector('#skip').addEventListener("click", function(){
	console.log(video.currentTime);
	video.currentTime+=15;

	if (video.currentTime>=video.duration){
		video.currentTime=0;
		console.log(video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");

	if(video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute"
	}

	else{
		video.muted=true;
		document.getElementById("mute").innerHTML="Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.getElementById("volume").innerHTML=this.value+"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});