//1
var c = function( p ) {
var fr = 10; //starting FPS
var sp = 120;
var ep = 390; // end point
var v0 = 5;
var v = v0; //congo velocity
var a = 9.0; // acceleration
var sound ;             // 

p.preload = function() {
	   sound = p.loadSound('sounds/congo.mp3');
}

p.setup =function () {

 var myCanvas = p.createCanvas(100, 600);
  myCanvas.parent("congo");

    p.frameRate(fr); 
    p.background('white');
}

p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider1.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);
	p.ellipse(50,sp,10,10);
};
}
new p5(c,"congo");

//2
var s = function(p) {
var fr = 10; 
var sp = 120;
var ep = 390; 
var v0 = 5;
var v = v0; 
var a = 9.0; 
var sound;
p.preload = function() {
	  sound = p.loadSound('sounds/floortom.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('floortomCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("floortomCanvas");
    p.frameRate(fr); 
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider2.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);
	p.ellipse(55,sp,10,10);
};
}

new p5(s , "floortom");

//3
var a = function(p) {
var fr = 10; 
var sp = 120;
var ep = 390; 
var v0 = 5;
var v = v0; 
var a = 9.0; 
var w = 0;  
var sound;

p.preload = function() {
	  sound = p.loadSound('sounds/bassdrum.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('bassdrumCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("bassdrumCanvas");
    p.frameRate(fr); 
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider3.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);
	p.ellipse(55,sp,10,10);
};
}

new p5(a , "bassdrum");


//4
var b = function(p){
var fr = 10; 
var sp = 120;
var ep = 400;
var v0 = 5;
var v = v0; 
var a = 9.0;
var sound;

p.preload = function() {
	  sound = p.loadSound('sounds/snaredrum.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('snareCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("snareCanvas");
    p.frameRate(fr); // Attempt to refresh at starting FPS
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider4.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);
	p.ellipse(55,sp,10,10);
};
}

new p5(b , "snare");



var d = function(p){
var fr = 10;
var sp = 120;
var ep = 400;
var v0 = 5;
var v = v0; 
var floortom_v = v0;
var a = 9.0; 
var sound;

p.preload = function() {
	 sound = p.loadSound('sounds/hihat.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('hihatCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("hihatCanvas");
    p.frameRate(fr);
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider5.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);	
	p.ellipse(55,sp,10,10);
};
}

new p5(d , "hihat");



var e = function(p){
var fr = 10; 
var sp = 120;
var ep = 400;
var v0 = 5;
var v = v0; 
var floortom_v = v0; 
var a = 9.0; 
var sound;

p.preload = function() {
	sound = p.loadSound('sounds/crashcymbal.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('crashcymbalCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("crashcymbalCanvas");
    p.frameRate(fr);
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider6.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);	
	p.ellipse(55,sp,10,10);
};
}

new p5(e , "crashcymbal");




var f = function(p){
var fr = 10; 
var sp = 120;
var ep = 400;
var v0 = 5;
var v = v0; 
var a = 9.0; 
var sound;

p.preload = function() {
	sound = p.loadSound('sounds/tabla.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('tablaCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("tablaCanvas");
    p.frameRate(fr);
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider7.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);	
	p.ellipse(55,sp,10,10);
};
}

new p5(f , "tabla");



var f = function(p){
var fr = 10; 
var sp = 120;
var ep = 400;
var v0 = 5;
var v = v0; 
var a = 9.0; 
var sound;

p.preload = function() {
	sound = p.loadSound('sounds/angklung.mp3');
}

p.setup = function() {
var canvasDiv = document.getElementById('angklungCanvas');
var width = canvasDiv.offsetWidth;
 var myCanvas = p.createCanvas(width, 600);
 myCanvas.parent("angklungCanvas");
    p.frameRate(fr);
    p.background('white');
}

 p.draw = function() {
var x = document.getElementsByClassName('sliders');
v = x.slider8.noUiSlider.get()/2 ;
    if(sp < ep){
		sp = sp + v;
		 v += a;
	}
	else{
		sound.play();
		 sp = 120;
		p.clear();
		v = v0;
	}
	p.clear();
	var c = p.color(100, 0, 0);
	p.fill(c);	
	p.ellipse(55,sp,10,10);
};
}

new p5(f , "angklung");