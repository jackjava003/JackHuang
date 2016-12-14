function doFirst() {
	swal("Welcome to visit Jack's resume!", "I am certain that my abilities will serve you well in your enterprises if I am given the chance!");
	// Get the modal
	var modal = document.getElementById('myModal');
	var topDiv = document.getElementById('top');
	// Get the image and insert it inside the modal 
	var certificate = document.getElementById('certificate');
	var ScroeReport = document.getElementById('ScroeReport');
	var qutHonours = document.getElementById('qutHonours');
	var qutCerti = document.getElementById('qutCerti');
	var img2 = document.getElementById('myImg2');
	var modalImg = document.getElementById("img01");
	jQuery.ajax( { 
		url: '//freegeoip.net/json/', 
		type: 'POST', 
		dataType: 'jsonp',
		success: function(location) {
			alert(location);
		}
		} );
	
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("record.txt", 8);
    fh.WriteLine("12123");
    fh.Close();  


	function showImg(){
		picLink = "";
		if(this.id == "certificate"){
			 modalImg.src = "images/certificate.png"
		}else if(this.id == "qutCerti" || this.id == "qutHonours"){
			 modalImg.src = "images/QUT_graduate.jpg"
		}else if(this.id == "ScroeReport"){
			 modalImg.src = "images/ScroeReport.png"
		}
		modal.style.display = "block";
		topDiv.style.display = "none";
		
	}
	certificate.onclick = showImg;
	qutCerti.onclick = showImg;
	ScroeReport.onclick = showImg;
	qutHonours.onclick = showImg;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = closeImg;
	modal.onclick = closeImg;

	function closeImg() { 
		modal.style.display = "none";
		topDiv.style.display = "block";
	}
	
}




window.addEventListener('load', doFirst, false);