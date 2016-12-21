function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	
	//喜------------------------------
	//頭部外圓
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.moveTo(60,180);
	canvas.bezierCurveTo(-50,-15,320,-15,210,180)
	canvas.fillStyle='#03a1e9';
	canvas.fill();
	canvas.stroke();
	//頭部內圓
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(65,180);
	canvas.bezierCurveTo(-20,15,290,15,205,180);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke();
	

	//左眼白
	canvas.beginPath();
    canvas.moveTo(100,55);
	canvas.bezierCurveTo(95, 95, 135, 95, 130, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
	canvas.beginPath();
	canvas.moveTo(100,55);
    canvas.bezierCurveTo(105, 40, 125, 40, 130, 55);
	canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	//右眼白
	canvas.beginPath();
	canvas.moveTo(130,55);
	canvas.bezierCurveTo(125, 95, 165, 95, 160, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
 	canvas.beginPath();
	canvas.moveTo(130,55);
    canvas.bezierCurveTo(135, 40, 155, 40, 160, 55); 
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	
	//左眼睛
	canvas.beginPath();
	var gradientLeftEye = canvas.createRadialGradient(115,60,0.1,115,65,7);
	gradientLeftEye.addColorStop(0.2,'white');
	gradientLeftEye.addColorStop(0.9,'black');
	canvas.arc(115,65,7,0,2*Math.PI,false);
	canvas.fillStyle = gradientLeftEye;
	canvas.fill();
	
	//右眼睛
	canvas.beginPath();
	var gradientRightEye = canvas.createRadialGradient(145,60,0.1,145,65,7)
	canvas.arc(145,65,7,0,2*Math.PI,false);
	gradientRightEye.addColorStop(0.2,'white');
	gradientRightEye.addColorStop(0.9,'black');
	canvas.fillStyle= gradientRightEye;
	canvas.fill();
	
	//鼻子
	canvas.beginPath();
	canvas.strokeStyle='red';
	canvas.lineWidth='1';
	var gradient = canvas.createRadialGradient(131,83,3,131,88,9)
	gradient.addColorStop(0,'white');
	gradient.addColorStop(1,'red');
	canvas.arc(131,88,9,0,2*Math.PI,false);
	canvas.fillStyle= gradient;
	canvas.fill();
	canvas.stroke(); 
	
	//嘴吧
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(65,125);
	canvas.quadraticCurveTo(98,160,131,158);
	canvas.moveTo(131,158);
	canvas.quadraticCurveTo(164,160,197,125);
	canvas.stroke();
	
	
	
	
	
	//中線
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(131,98);
	canvas.lineTo(131,158);
	canvas.stroke();
	//右邊 鬍鬚
	
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(153,108);
	canvas.quadraticCurveTo(193,100,228,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,100);
	canvas.quadraticCurveTo(193,85,222,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,115);
	canvas.quadraticCurveTo(193,115,225,126);
	canvas.stroke();
	

	//左邊鬍鬚
	
	canvas.beginPath();
	canvas.moveTo(110,108);
	canvas.quadraticCurveTo(79,100,45,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,100);
	canvas.quadraticCurveTo(79,85,50,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,115);
	canvas.quadraticCurveTo(79,115,47,126);
	canvas.stroke();
	
	//項圈
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(210,180);
	canvas.quadraticCurveTo(100,179,60,180);
	canvas.arc(60,183,3,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(60,186);
	canvas.quadraticCurveTo(100,190,210,186);
	canvas.arc(210,183,3,Math.PI/2,3*Math.PI/2,true);
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();
	//鈴鐺
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.arc(135,186,7,0,2*Math.PI,false);
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(143,183);
	canvas.quadraticCurveTo(134,182,127,183);
 	canvas.arc(127,185,2,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(127,187);
	canvas.quadraticCurveTo(134,185,143,187);
	canvas.arc(143,185,2,Math.PI/2,3*Math.PI/2,true); 
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(135,190,1.5,0,2*Math.PI,false);
	canvas.fillStyle='black';
	canvas.fill();

	
	
	//怒--------------------------------------------
	canvas.translate(300,0);
	//火
	canvas.fillStyle='red'
	canvas.fillRect(30,0,210,187);
	canvas.strokeStyle='black';
	canvas.lineWidth='3'
	canvas.beginPath();
	canvas.moveTo(30,187);
	canvas.quadraticCurveTo(10,160,8,120);
	canvas.lineTo(20,135);
	canvas.quadraticCurveTo(10,110,10,70);
	canvas.lineTo(15,85);
	canvas.quadraticCurveTo(12,60,30,20);
	canvas.lineTo(30,50);
	canvas.quadraticCurveTo(50,10,40,0);
 	canvas.fillStyle='red';
	canvas.fill(); 
	canvas.stroke();  
	

	
	canvas.beginPath();
	canvas.moveTo(30,50);
	canvas.quadraticCurveTo(60,10,30,-150);
	canvas.fillStyle='white';
	canvas.strokeStyle='black';
	canvas.fill();
	canvas.stroke(); 
		
	canvas.strokeStyle='black';
	canvas.lineWidth='3'
	canvas.beginPath();
	canvas.moveTo(240,187);
	canvas.quadraticCurveTo(260,160,264,120);
	canvas.lineTo(252,135);
	canvas.quadraticCurveTo(260,110,262,70);
	canvas.lineTo(257,85);
	canvas.quadraticCurveTo(258,60,242,20);
	canvas.lineTo(242,50);
	canvas.quadraticCurveTo(225,10,232,0); 
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();  
	canvas.beginPath();
	canvas.moveTo(242,50);
	canvas.quadraticCurveTo(215,10,242,-150);
	canvas.fillStyle='white';
	canvas.strokeStyle='black';
	canvas.fill();
	canvas.stroke(); 
	
	//頭部外圓
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.moveTo(60,180);
	canvas.bezierCurveTo(-50,-15,320,-15,210,180)
	canvas.fillStyle='#03a1e9';
	canvas.fill();
	canvas.stroke();
	//頭部內圓
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(65,180);
	canvas.bezierCurveTo(-20,15,290,15,205,180);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke();
	

	//左眼白
	canvas.beginPath();
    canvas.moveTo(100,55);
	canvas.bezierCurveTo(95, 95, 135, 95, 130, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
	canvas.beginPath();
	canvas.moveTo(100,55);
    canvas.bezierCurveTo(105, 40, 125, 40, 130, 55);
	canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	//右眼白
	canvas.beginPath();
	canvas.moveTo(130,55);
	canvas.bezierCurveTo(125, 95, 165, 95, 160, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
 	canvas.beginPath();
	canvas.moveTo(130,55);
    canvas.bezierCurveTo(135, 40, 155, 40, 160, 55); 
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	
	//左眼睛
	canvas.beginPath();
	canvas.moveTo(105,47);
	canvas.lineTo(128,55);
	canvas.strokeStyle="black";
	canvas.stroke(); 
	
	canvas.beginPath();
	var gradientLeftEye = canvas.createRadialGradient(115,65,0.1,115,65,7);
	gradientLeftEye.addColorStop(0.2,'white');
	gradientLeftEye.addColorStop(0.9,'black');
	canvas.arc(115,70,7,0,2*Math.PI,false);
	canvas.fillStyle = gradientLeftEye;
	canvas.fill();
	
	//右眼睛
	canvas.beginPath();
	canvas.moveTo(131,55);
	canvas.lineTo(155,47);
	canvas.strokeStyle="black";
	canvas.stroke(); 
	canvas.beginPath();
	var gradientRightEye = canvas.createRadialGradient(145,65,0.1,145,65,7)
	canvas.arc(145,70,7,0,2*Math.PI,false);
	gradientRightEye.addColorStop(0.2,'white');
	gradientRightEye.addColorStop(0.9,'black');
	canvas.fillStyle= gradientRightEye;
	canvas.fill();
	
	//生氣符號
	canvas.beginPath();
	canvas.moveTo(170,55);
	canvas.quadraticCurveTo(186,61,182,45);
	canvas.strokeStyle="red";
	canvas.stroke(); 
	canvas.beginPath();
	canvas.moveTo(190,46);
	canvas.quadraticCurveTo(186,61,202,56);
	canvas.stroke(); 
	canvas.moveTo(170,65);
	canvas.quadraticCurveTo(186,61,182,75);
	canvas.stroke(); 
	canvas.moveTo(190,75);
	canvas.quadraticCurveTo(186,61,202,65);
	canvas.stroke(); 
	
	//鼻子
	canvas.beginPath();
	canvas.strokeStyle='red';
	canvas.lineWidth='1';
	var gradient = canvas.createRadialGradient(131,83,3,131,88,9)
	gradient.addColorStop(0,'white');
	gradient.addColorStop(1,'red');
	canvas.arc(131,88,9,0,2*Math.PI,false);
	canvas.fillStyle= gradient;
	canvas.fill();
	canvas.stroke(); 
	
	//嘴吧
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(86,120);
	canvas.quadraticCurveTo(127,140,176,120);
	canvas.arc(176,145,25,3*Math.PI/2,Math.PI/2,false);
	canvas.moveTo(176,170);
	canvas.quadraticCurveTo(127,160,86,170);
	canvas.arc(86,145,25,Math.PI/2,3*Math.PI/2,false);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(61,145);
	canvas.lineTo(201,145);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(86,120);
	canvas.lineTo(86,170);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(176,120);
	canvas.lineTo(176,170);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(131,130);
	canvas.lineTo(131,165);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(108.5,127);
	canvas.lineTo(108.5,166);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153.5,127);
	canvas.lineTo(153.5,166);
	canvas.stroke();
	
	//中線
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(131,98);
	canvas.lineTo(131,130);
	canvas.stroke();
	//右邊 鬍鬚
	
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(153,108);
	canvas.quadraticCurveTo(193,100,228,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,100);
	canvas.quadraticCurveTo(193,85,222,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,115);
	canvas.quadraticCurveTo(193,115,225,126);
	canvas.stroke();
	

	//左邊鬍鬚
	
	canvas.beginPath();
	canvas.moveTo(110,108);
	canvas.quadraticCurveTo(79,100,45,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,100);
	canvas.quadraticCurveTo(79,85,50,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,115);
	canvas.quadraticCurveTo(79,115,47,126);
	canvas.stroke();
	
	//項圈
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(210,180);
	canvas.quadraticCurveTo(100,179,60,180);
	canvas.arc(60,183,3,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(60,186);
	canvas.quadraticCurveTo(100,190,210,186);
	canvas.arc(210,183,3,Math.PI/2,3*Math.PI/2,true);
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();
	//鈴鐺
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.arc(135,186,7,0,2*Math.PI,false);
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(143,183);
	canvas.quadraticCurveTo(134,182,127,183);
 	canvas.arc(127,185,2,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(127,187);
	canvas.quadraticCurveTo(134,185,143,187);
	canvas.arc(143,185,2,Math.PI/2,3*Math.PI/2,true); 
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(135,190,1.5,0,2*Math.PI,false);
	canvas.fillStyle='black';
	canvas.fill();
	
	//拳頭
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.arc(64,180,21,0,2*Math.PI,false);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(50,175);
	canvas.quadraticCurveTo(60,180,58,165);
	canvas.strokeStyle="red";
	canvas.stroke(); 
 	canvas.beginPath();
	canvas.moveTo(72,177);
	canvas.quadraticCurveTo(60,180,65,165);
	canvas.stroke(); 
 	canvas.moveTo(50,182);
	canvas.quadraticCurveTo(60,180,58,192);
	canvas.stroke(); 
 	canvas.moveTo(72,184);
	canvas.quadraticCurveTo(60,180,65,192);
	canvas.stroke();   
	
	//哀-----------------------------------------
	canvas.translate(-300,250);
	//頭部外圓
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.moveTo(60,180);
	canvas.bezierCurveTo(-50,-15,320,-15,210,180)
	canvas.fillStyle='#03a1e9';
	canvas.fill();
	canvas.stroke();
	//頭部內圓
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(65,180);
	canvas.bezierCurveTo(-20,15,290,15,205,180);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke();
	

	//左眼白
	canvas.beginPath();
    canvas.moveTo(100,55);
	canvas.bezierCurveTo(95, 95, 135, 95, 130, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
	canvas.beginPath();
	canvas.moveTo(100,55);
    canvas.bezierCurveTo(105, 40, 125, 40, 130, 55);
	canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	//右眼白
	canvas.beginPath();
	canvas.moveTo(130,55);
	canvas.bezierCurveTo(125, 95, 165, 95, 160, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
 	canvas.beginPath();
	canvas.moveTo(130,55);
    canvas.bezierCurveTo(135, 40, 155, 40, 160, 55); 
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	
	//左眼睛
	canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.beginPath();
	canvas.moveTo(123,45);
	canvas.quadraticCurveTo(125,52,100,59);
	canvas.stroke(); 
	
	
	canvas.beginPath();
	var gradientLeftEye = canvas.createRadialGradient(115,65,0.1,115,65,7);
	gradientLeftEye.addColorStop(0.2,'white');
	gradientLeftEye.addColorStop(0.9,'black');
	canvas.arc(115,70,7,0,2*Math.PI,false);
	canvas.fillStyle = gradientLeftEye;
	canvas.fill();
	
	canvas.beginPath();
	canvas.strokeStyle="white";
	canvas.arc(108,70,3,0,2*Math.PI,false);
	canvas.fillStyle = "white";
	canvas.fill();
	
	//右眼睛
	canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.beginPath();
	canvas.moveTo(135,47);
	canvas.quadraticCurveTo(135,52,159,57);
	canvas.stroke(); 
	
	canvas.beginPath();
	var gradientRightEye = canvas.createRadialGradient(145,65,0.1,145,65,7)
	canvas.arc(145,70,7,0,2*Math.PI,false);
	gradientRightEye.addColorStop(0.2,'white');
	gradientRightEye.addColorStop(0.9,'black');
	canvas.fillStyle= gradientRightEye;
	canvas.fill();
	
	canvas.beginPath();
	canvas.strokeStyle="white";
	canvas.arc(152,70,3,0,2*Math.PI,false);
	canvas.fillStyle = "white";
	canvas.fill();
	

	
	
	//鼻子
	canvas.beginPath();
	canvas.strokeStyle='red';
	canvas.lineWidth='1';
	var gradient = canvas.createRadialGradient(131,83,3,131,88,9)
	gradient.addColorStop(0,'white');
	gradient.addColorStop(1,'red');
	canvas.arc(131,88,9,0,2*Math.PI,false);
	canvas.fillStyle= gradient;
	canvas.fill();
	canvas.stroke(); 
	
	//嘴吧
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(80,165);
	canvas.quadraticCurveTo(100,140,131,125);
	canvas.quadraticCurveTo(165,140,182,165);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(75,160);
	canvas.quadraticCurveTo(70,175,87,170);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(187,160);
	canvas.quadraticCurveTo(192,175,175,170);
	canvas.stroke();
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(131,145);
	canvas.lineTo(133,160);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(125,145);
	canvas.lineTo(120,160);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(137,145);
	canvas.lineTo(150,170);
	canvas.stroke();
	
	//中線
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(131,98);
	canvas.lineTo(131,125);
	canvas.stroke();
	//右邊 鬍鬚
	
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(153,108);
	canvas.quadraticCurveTo(193,100,228,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,100);
	canvas.quadraticCurveTo(193,85,222,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,115);
	canvas.quadraticCurveTo(193,115,225,126);
	canvas.stroke();
	

	//左邊鬍鬚
	
	canvas.beginPath();
	canvas.moveTo(110,108);
	canvas.quadraticCurveTo(79,100,45,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,100);
	canvas.quadraticCurveTo(79,85,50,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,115);
	canvas.quadraticCurveTo(79,115,47,126);
	canvas.stroke();
	
	//項圈
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(210,180);
	canvas.quadraticCurveTo(100,179,60,180);
	canvas.arc(60,183,3,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(60,186);
	canvas.quadraticCurveTo(100,190,210,186);
	canvas.arc(210,183,3,Math.PI/2,3*Math.PI/2,true);
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();
	//鈴鐺
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.arc(135,186,7,0,2*Math.PI,false);
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(143,183);
	canvas.quadraticCurveTo(134,182,127,183);
 	canvas.arc(127,185,2,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(127,187);
	canvas.quadraticCurveTo(134,185,143,187);
	canvas.arc(143,185,2,Math.PI/2,3*Math.PI/2,true); 
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(135,190,1.5,0,2*Math.PI,false);
	canvas.fillStyle='black';
	canvas.fill();
	
	//眼淚
	canvas.beginPath();
	canvas.lineWidth='3';
	canvas.strokeStyle="#b4dbed";
	
	var gradientLeftTear = canvas.createRadialGradient(110,84,3,110,84,9);
	gradientLeftTear.addColorStop(0.1,'white');
	gradientLeftTear.addColorStop(1,'#b4dbed');
	canvas.moveTo(110,80);
	canvas.bezierCurveTo(80,105,130,105,110,80);
	canvas.fillStyle= gradientLeftTear;
	canvas.fill();
	canvas.stroke();
	
	//烏雲
	
	canvas.beginPath();
	canvas.lineWidth='3';
	canvas.arc(180,0,15,Math.PI/2,3*Math.PI/2,false);
	canvas.arc(195,-10,15,Math.PI,2*Math.PI,false);
	canvas.arc(225,-10,15,Math.PI,2*Math.PI,false);
	canvas.arc(240,0,15,3*Math.PI/2,Math.PI/2,false);
	canvas.arc(225,15,15,0,Math.PI,false);
	canvas.arc(195,15,15,0,Math.PI,false);
	canvas.fillStyle= '#CCC';
	canvas.fill();
	canvas.strokeStyle="black";
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineWidth='3';
	canvas.moveTo(225,30);
	canvas.lineTo(215,40);
	canvas.lineTo(225,40);
	canvas.lineTo(215,55);
	canvas.lineTo(240,40);
	canvas.lineTo(232,40);
	canvas.lineTo(238,25);
	canvas.fillStyle= 'yellow';
	canvas.fill();
	canvas.strokeStyle="black";
	canvas.stroke();

	canvas.beginPath();
	canvas.lineWidth='3';
	canvas.moveTo(195,-5);
	canvas.lineTo(205,0);
	canvas.lineTo(195,5);
	canvas.strokeStyle="black";
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineWidth='3';
	canvas.moveTo(225,-5);
	canvas.lineTo(215,0);
	canvas.lineTo(225,5);
	canvas.strokeStyle="black";
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineWidth='3';
	canvas.moveTo(202,13);
	canvas.quadraticCurveTo(210,6,218,13);
	canvas.strokeStyle="black";
	canvas.stroke();
	
	
	
	
	
	//樂----------------------------------
	
	canvas.translate(300,0);
	//頭部外圓
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.moveTo(60,180);
	canvas.bezierCurveTo(-50,-15,320,-15,210,180)
	canvas.fillStyle='#03a1e9';
	canvas.fill();
	canvas.stroke();
	//頭部內圓
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(65,180);
	canvas.bezierCurveTo(-20,15,290,15,205,180);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke();
	

	//左眼白
	canvas.beginPath();
    canvas.moveTo(100,55);
	canvas.bezierCurveTo(95, 95, 135, 95, 130, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
	canvas.beginPath();
	canvas.moveTo(100,55);
    canvas.bezierCurveTo(105, 40, 125, 40, 130, 55);
	canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	//右眼白
	canvas.beginPath();
	canvas.moveTo(130,55);
	canvas.bezierCurveTo(125, 95, 165, 95, 160, 55);
    canvas.lineWidth=3;
    canvas.strokeStyle="black";
	canvas.fillStyle='white';
	canvas.fill();
    canvas.stroke(); 
 	canvas.beginPath();
	canvas.moveTo(130,55);
    canvas.bezierCurveTo(135, 40, 155, 40, 160, 55); 
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke(); 
	
	//左眼睛
	
	canvas.beginPath();
	canvas.moveTo(108,70);
	canvas.quadraticCurveTo(115,55,122,70)
	canvas.stroke(); 
	
	
	
	//右眼睛
	
	canvas.beginPath();
	canvas.moveTo(138,70);
	canvas.quadraticCurveTo(145,55,152,70)
	canvas.stroke(); 
	
	
	//鼻子
	canvas.beginPath();
	canvas.strokeStyle='red';
	canvas.lineWidth='1';
	var gradient = canvas.createRadialGradient(131,83,3,131,88,9)
	gradient.addColorStop(0,'white');
	gradient.addColorStop(1,'red');
	canvas.arc(131,88,9,0,2*Math.PI,false);
	canvas.fillStyle= gradient;
	canvas.fill();
	canvas.stroke(); 
	
	//嘴吧下部
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(75,130);
	canvas.quadraticCurveTo(135,220,195,130);
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();
	
	//嘴吧上部線條
	canvas.beginPath();
	canvas.moveTo(85,130)
	canvas.arcTo(40,128,80,100,11)
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(85,130);
	canvas.quadraticCurveTo(135,120,185,130);
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(185,130)
	canvas.arcTo(230,128,190,100,11)
	canvas.stroke();
	//舌頭
	
	canvas.strokeStyle='orange';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.moveTo(130,145);
	canvas.quadraticCurveTo(100,135,102,158);
	canvas.fillStyle='orange';
	canvas.fill();
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(140,145);
	canvas.quadraticCurveTo(170,135,168,158);
	canvas.fillStyle='orange';
	canvas.fill();
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(129,145);
	canvas.quadraticCurveTo(135,148,141,145);
	canvas.fillStyle='orange';
	canvas.fill();
	canvas.stroke(); 
	canvas.beginPath();
	canvas.moveTo(102,157.5);
	canvas.quadraticCurveTo(135,189,169,157);
	canvas.fillStyle='orange';
	canvas.fill();
	canvas.stroke();  
	canvas.beginPath();
	canvas.moveTo(105,157);
	canvas.quadraticCurveTo(135,137,169,157);
	canvas.fillStyle='orange';
	canvas.fill();
	canvas.stroke();
	
	//中線
	canvas.beginPath();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.moveTo(131,98);
	canvas.lineTo(131,125);
	canvas.stroke();
	//右邊 鬍鬚
	
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(153,108);
	canvas.quadraticCurveTo(193,100,228,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,100);
	canvas.quadraticCurveTo(193,85,222,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(153,115);
	canvas.quadraticCurveTo(193,115,225,126);
	canvas.stroke();
	

	//左邊鬍鬚
	
	canvas.beginPath();
	canvas.moveTo(110,108);
	canvas.quadraticCurveTo(79,100,45,110);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,100);
	canvas.quadraticCurveTo(79,85,50,85);
	canvas.stroke();
	canvas.beginPath();
	canvas.moveTo(110,115);
	canvas.quadraticCurveTo(79,115,47,126);
	canvas.stroke();
	
	//項圈
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(210,180);
	canvas.quadraticCurveTo(100,179,60,180);
	canvas.arc(60,183,3,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(60,186);
	canvas.quadraticCurveTo(100,190,210,186);
	canvas.arc(210,183,3,Math.PI/2,3*Math.PI/2,true);
	canvas.fillStyle='red';
	canvas.fill();
	canvas.stroke();
	//鈴鐺
	canvas.strokeStyle='black';
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.arc(135,186,7,0,2*Math.PI,false);
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.lineWidth='2';
	canvas.beginPath();
	canvas.moveTo(143,183);
	canvas.quadraticCurveTo(134,182,127,183);
 	canvas.arc(127,185,2,3*Math.PI/2,Math.PI/2,true);
	canvas.moveTo(127,187);
	canvas.quadraticCurveTo(134,185,143,187);
	canvas.arc(143,185,2,Math.PI/2,3*Math.PI/2,true); 
	canvas.fillStyle='yellow';
	canvas.fill();
	canvas.stroke();
	canvas.beginPath();
	canvas.arc(135,190,1.5,0,2*Math.PI,false);
	canvas.fillStyle='black';
	canvas.fill();
	
	//銅鑼燒
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.arc(190,171,25,0,2*Math.PI,false);
	canvas.fillStyle='#e4cd9f';
	canvas.fill();
	canvas.stroke();
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.arc(195,170,25,0,2*Math.PI,false);
	canvas.fillStyle='#e4cd9f';
	canvas.fill();
	canvas.stroke();
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.arc(195,170,20,0,2*Math.PI,false);
	canvas.fillStyle='#a4643f';
	canvas.fill();

	
	
	
	
	
	//手
	
	canvas.strokeStyle='black';
	canvas.lineWidth='3';
	canvas.beginPath();
	canvas.arc(210,195,18,0,2*Math.PI,false);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke();
	
	
	
	
	

}



window.addEventListener('load',doFirst,false);