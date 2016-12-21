function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	document.getElementById('UTCSubmit').onclick=UTC;
	document.getElementById('CompSubmit').onclick=Comp;
	compTime = setInterval(update,500);  //啟動網頁時優先執行這個setInterval
	UTCTime = null;
}

function Comp(){
	clearInterval(UTCTime);
	clearInterval(compTime);
	compTime = setInterval(update,500);
}
function UTC(){
	clearInterval(compTime);
	clearInterval(UTCTime);
	UTCTime = setInterval(UTCupdate,500);
}


function update(){
	drawClock();
	num();
 	sec();
	min();
	hour(); 
}
	
function drawClock(){
	
	canvas.clearRect(0,0,690,490);
	//清除畫面
	
	canvas.beginPath();
 	canvas.strokeStyle='gold';
	canvas.lineWidth='3';
	canvas.arc(300,300,215,0,2*Math.PI,false);
	canvas.fillStyle = 'red';
	canvas.shadowOffsetX = 0;
	canvas.shadowOffsetY = 0;
	canvas.shadowColor = "blue";
	canvas.shadowBlur = 0; 
	canvas.fill();
	canvas.stroke();
	
	//外圓
	canvas.beginPath();
 	canvas.strokeStyle='gold';
	canvas.lineWidth='3';
	canvas.arc(300,300,200,0,2*Math.PI,false);
	canvas.fillStyle = 'white';
	canvas.fill();
	canvas.stroke();
	//圓中心
	canvas.beginPath();
	canvas.arc(300,300,8,0,2*Math.PI,false);
	canvas.fillStyle = 'steelblue';
	canvas.fill();
	
	
	//Made In Taiwan
	canvas.beginPath();
	canvas.fillStyle='black';
	canvas.shadowOffsetX = 3;
	canvas.shadowOffsetY = 3;
	canvas.shadowColor = 'skyblue';
	canvas.shadowBlur = 3; 
	canvas.font='bold 13px Comic Sans MS';
	canvas.fillText('Made In Taiwan',250,430);
	canvas.fill(); 
	
}

function num(){
	//刻度  數字
	var bigArcRadius = 200;
	var smallArcRadius = 190;
	var innerArcRadius = 180;
	var numberRadius = 170;
	canvas.beginPath();
	var angleInClock = (3*Math.PI/2);
	for(var i = 1; i<=60;i++){
		angleInClock += 2*Math.PI/60;
		if(i%5 !=0){
			var smallX = 300+Math.cos(angleInClock)*smallArcRadius;
			var smallY = 300+Math.sin(angleInClock)*smallArcRadius;
		
			canvas.lineWidth='1';
			canvas.stroke(); 
		}else{
			var smallX = 300+Math.cos(angleInClock)*innerArcRadius;
			var smallY = 300+Math.sin(angleInClock)*innerArcRadius;
			canvas.lineWidth='3';
 			canvas.fillStyle='black';
 			canvas.shadowOffsetX = 0;
			canvas.shadowOffsetY = 0;
			canvas.shadowColor = 'skyblue';
			canvas.shadowBlur = 3; 
			canvas.font='bold 20px Comic Sans MS';
			canvas.fillText(i/5,300+Math.cos(angleInClock)*numberRadius -10,300+Math.sin(angleInClock)*numberRadius+7);
		}
		var arcX = 300+Math.cos(angleInClock)*bigArcRadius;
		var arcY = 300+Math.sin(angleInClock)*bigArcRadius;
		canvas.beginPath();
		canvas.moveTo(arcX,arcY);
		canvas.lineTo(smallX,smallY);
		canvas.strokeStyle='black';
		canvas.stroke(); 		
	}
}

function sec(){
	var time = new Date();
	var sec = time.getSeconds();
	var hour = time.getHours();
	
	canvas.beginPath();
	canvas.fillStyle='black';
	canvas.shadowOffsetX = 3;
	canvas.shadowOffsetY = 3;
	canvas.shadowColor = 'skyblue';
	canvas.shadowBlur = 3; 
	canvas.font='bold 16px Comic Sans MS';
	canvas.fillText(time.toLocaleDateString(),260,250);
	canvas.fill(); 	
	
	//判斷上下午
	canvas.beginPath();
	canvas.fillStyle='lightblue';
	canvas.fillRect(343,330,85,28);
	
	if(hour>=12){
		canvas.beginPath();
		canvas.fillStyle='black';
		canvas.shadowOffsetX = 3;
		canvas.shadowOffsetY = 3;
		canvas.shadowColor = 'skyblue';
		canvas.shadowBlur = 3; 
		canvas.font='bold 16px Comic Sans MS';
		canvas.fillText('PM',350,350);
		canvas.fill(); 
	}else{
		canvas.beginPath();
		canvas.fillStyle='black';
		canvas.shadowOffsetX = 3;
		canvas.shadowOffsetY = 3;
		canvas.shadowColor = 'skyblue';
		canvas.shadowBlur = 3; 
		canvas.font='bold 16px Comic Sans MS';
		canvas.fillText('AM',350,350);
		canvas.fill(); 	
	}
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 0;
	canvas.shadowColor = 'skyblue';
	canvas.shadowBlur = 3; 
	canvas.font='bold 20px Comic Sans MS';
	canvas.fillText(time.toString(),50,50);
	angle =(sec-15)*(2*Math.PI/60);
	//當angle = 0時  x座標為470  y座標為0  (15秒的位置)
	
	var outerCircleR = 170;
	var circleX = 300;
	var circleY = 300;
	var x = circleX+Math.cos(angle)*outerCircleR;
	var y = circleY+Math.sin(angle)*outerCircleR;
	canvas.beginPath();
	canvas.moveTo(300,300);
	canvas.lineTo(x,y);
	canvas.strokeStyle='red';
	canvas.lineWidth='3';
	canvas.stroke(); 
}
function min(){
	var time = new Date();
	var min = time.getMinutes();
	angle =(min-15)*(2*Math.PI/60);

	var outerCircleR = 145;
	var circleX = 300;
	var circleY = 300;
	var x = circleX+Math.cos(angle)*outerCircleR;
	var y = circleY+Math.sin(angle)*outerCircleR;
	canvas.beginPath();
	canvas.moveTo(300,300);
	canvas.lineTo(x,y);
	canvas.strokeStyle='black';
	canvas.lineWidth='5';
	canvas.stroke(); 
}

function hour(){
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	angle =(hour-15)*(2*Math.PI/12)+(min*Math.PI/360);
	//讓時針真實一點   例如:30分時  時針在2的時間點的中間
	//1分鐘增加角度0.5度  60分鐘增加30度 30度=一個小時
	
	var outerCircleR = 110;
	var circleX = 300;
	var circleY = 300;
	var x = circleX+Math.cos(angle)*outerCircleR;
	var y = circleY+Math.sin(angle)*outerCircleR;
	canvas.beginPath();
	canvas.moveTo(300,300);
	canvas.lineTo(x,y);
	canvas.strokeStyle='black';
	canvas.lineWidth='8';
	canvas.stroke(); 
}

function UTCupdate(){
	drawClock();
	num();
	UTCsec();
	UTCmin();
	UTChour();
}

function UTCsec(){
	var time = new Date();
	var sec = time.getUTCSeconds();
	var hour = time.getUTCHours();
	
	canvas.beginPath();
	canvas.fillStyle='black';
	canvas.shadowOffsetX = 3;
	canvas.shadowOffsetY = 3;
	canvas.shadowColor = 'skyblue';
	canvas.shadowBlur = 3; 
	canvas.font='bold 16px Comic Sans MS';
	canvas.fillText(time.getUTCFullYear()+'/'+(time.getUTCMonth()+1)+'/'+time.getUTCDate(),260,250);
	canvas.fill(); 
	
	//判斷上下午
	canvas.beginPath();
	canvas.fillStyle='skyblue';
	canvas.fillRect(343,330,85,28);
	
	if(hour>=12){
		canvas.beginPath();
		canvas.fillStyle='black';
		canvas.shadowOffsetX = 3;
		canvas.shadowOffsetY = 3;
		canvas.shadowColor = 'skyblue';
		canvas.shadowBlur = 3; 
		canvas.font='bold 16px Comic Sans MS';
		canvas.fillText('PM',350,350);
		canvas.fill(); 
	}else{
		canvas.beginPath();
		canvas.fillStyle='black';
		canvas.shadowOffsetX = 3;
		canvas.shadowOffsetY = 3;
		canvas.shadowColor = 'skyblue';
		canvas.shadowBlur = 3; 
		canvas.font='bold 16px Comic Sans MS';
		canvas.fillText('AM',350,350);
		canvas.fill(); 	
	}
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 0;
	canvas.shadowColor = 'skyblue';
	canvas.shadowBlur = 3; 
	canvas.font='bold 20px Comic Sans MS';
	canvas.fillText(time.toUTCString(),50,50);
	angle =(sec-15)*(2*Math.PI/60);
	//當angle = 0時  x座標為470  y座標為0  (15秒的位置)
	
	var outerCircleR = 170;
	var circleX = 300;
	var circleY = 300;
	var x = circleX+Math.cos(angle)*outerCircleR;
	var y = circleY+Math.sin(angle)*outerCircleR;
	canvas.beginPath();
	canvas.moveTo(300,300);
	canvas.lineTo(x,y);
	canvas.strokeStyle='red';
	canvas.lineWidth='3';
	canvas.stroke(); 


}
function UTCmin(){
	var time = new Date();
	var min = time.getUTCMinutes();
	angle =(min-15)*(2*Math.PI/60);

	var outerCircleR = 145;
	var circleX = 300;
	var circleY = 300;
	var x = circleX+Math.cos(angle)*outerCircleR;
	var y = circleY+Math.sin(angle)*outerCircleR;
	canvas.beginPath();
	canvas.moveTo(300,300);
	canvas.lineTo(x,y);
	canvas.strokeStyle='black';
	canvas.lineWidth='5';
	canvas.stroke(); 
}

function UTChour(){
	var time = new Date();
	var hour = time.getUTCHours();
	var min = time.getUTCMinutes();
	angle =(hour-15)*(2*Math.PI/12)+(min*Math.PI/360);
	//讓時針真實一點   例如:30分時  時針在兩個時間點的中間
	//1分鐘增加角度0.5度  60分鐘增加30度 30度=一個小時

	var outerCircleR = 110;
	var circleX = 300;
	var circleY = 300;
	var x = circleX+Math.cos(angle)*outerCircleR;
	var y = circleY+Math.sin(angle)*outerCircleR;
	canvas.beginPath();
	canvas.moveTo(300,300);
	canvas.lineTo(x,y);
	canvas.strokeStyle='black';
	canvas.lineWidth='8';
	canvas.stroke(); 
}


window.addEventListener('load',doFirst,false);