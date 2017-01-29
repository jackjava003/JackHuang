function doFirst() {
	
	// Get the modal
	var modal = document.getElementById('myModal');
	var container = document.getElementById('container');
	// Get the image and insert it inside the modal 
	var certificate = document.getElementById('certificate');
	var qutCerti = document.getElementById('qutCerti');
	var projectImg2 = document.getElementById('projectImg2');
	var projectImg3 = document.getElementById('projectImg3');
	var projectImg4 = document.getElementById('projectImg4');
	var projectImg5 = document.getElementById('projectImg5');
	var projectImg6 = document.getElementById('projectImg6');
	var projectImg7 = document.getElementById('projectImg7');
	var projectImg8 = document.getElementById('projectImg8');
	var projectImg9 = document.getElementById('projectImg9');
	var projectImg10 = document.getElementById('projectImg10');
	var projectImg11 = document.getElementById('projectImg11');
	var projectImg12 = document.getElementById('projectImg12');
	var IKM = document.getElementById('IKM');
	var ScroeReport = document.getElementById('ScroeReport');
	var qutHonours = document.getElementById('qutHonours');
	/* var img2 = document.getElementById('myImg2'); */
	var modalImg = document.getElementById("img01"); 


	function showImg(){
		picLink = "";
		if(this.id == "certificate"){
			 modalImg.src = "images/certificate.png"
		}else if(this.id == "qutCerti" || this.id == "qutHonours"){
			 modalImg.src = "images/QUT_graduate.jpg"
		}else if(this.id == "ScroeReport"){
			 modalImg.src = "images/ScroeReport.png"
		}else if(this.id == "IKM"){
			modalImg.src = "images/java7.png"
		}else if(this.id =="projectImg2"){
			modalImg.src = "images/projectImg/2.png"
		}else if(this.id =="projectImg3"){
			modalImg.src = "images/projectImg/3.png"
		}else if(this.id =="projectImg4"){
			modalImg.src = "images/projectImg/4.png"
		}else if(this.id =="projectImg5"){
			modalImg.src = "images/projectImg/5.png"
		}else if(this.id =="projectImg6"){
			modalImg.src = "images/projectImg/6.png"
		}else if(this.id =="projectImg7"){
			modalImg.src = "images/projectImg/7.png"
		}else if(this.id =="projectImg8"){
			modalImg.src = "images/projectImg/8.png"
		}else if(this.id =="projectImg9"){
			modalImg.src = "images/projectImg/9.png"
		}else if(this.id =="projectImg10"){
			modalImg.src = "images/projectImg/10.png"
		}else if(this.id =="projectImg11"){
			modalImg.src = "images/projectImg/11.png"
		}else if(this.id =="projectImg12"){
			modalImg.src = "images/projectImg/12.png"
		}
		modal.style.display = "block";
		/* container.style.display = "none"; */
		
	}
	certificate.onclick = showImg;
	qutCerti.onclick = showImg;
	projectImg2.onclick = showImg;
	projectImg3.onclick = showImg;
	projectImg4.onclick = showImg;
	projectImg5.onclick = showImg;
	projectImg6.onclick = showImg;
	projectImg7.onclick = showImg;
	projectImg8.onclick = showImg;
	projectImg9.onclick = showImg;
	projectImg10.onclick = showImg;
	projectImg11.onclick = showImg;
	projectImg12.onclick = showImg;
	ScroeReport.onclick = showImg;
	qutHonours.onclick = showImg;
	IKM.onclick = showImg;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = closeImg;
	modal.onclick = closeImg;

	function closeImg() { 
		modal.style.display = "none";
		/* container.style.display = "block"; */
	}
	
}




window.addEventListener('load', doFirst, false);