var tasks = []; //空陣列 length = 0
function doFirst(){
	document.getElementById('theForm').onsubmit=addTask;
	document.getElementById('feedback').onclick =lineThrough;
}

function addTask(){
	var task = document.getElementById('task').value;
	var feedback='';
	
	if(task){
		tasks.push(task);
		feedback = '<h3>To-Do List</h3>';
		feedback += '<ol>';		
		for(var i=0; i<tasks.length; i++){
			if(tasks[i]!=undefined){
			feedback += '<li id="list'+i+'">'
			feedback += '<input type ="checkbox" id = "task'+i+'">'+tasks[i]+'</li><br>';
			}
		}
		//feedback += '</ol>'; 
	}
	document.getElementById('feedback').innerHTML = feedback;
		
	lineThrough();
	
	//上面部分動態增加task 上面部分動態增加按鈕
	buttons = document.getElementById('buttons');
	
	if(buttons.childNodes.length >3){
		//檢查length時html中不可有空白
		//當id(buttons 在div中)的孩子大於1的時候 先刪除最後的小孩
		//(1=input 要大於1不然會刪掉add按鈕)
		//此處刪除 下面會再增加
		buttons.removeChild(buttons.lastChild);
		buttons.removeChild(buttons.lastChild);
		buttons.removeChild(buttons.lastChild);
	}
	if(tasks.length !=0){
		//只要tasks的長度 不等於0  delete按鈕就會動態增加
		var delButton = document.createElement('button');
		delButton.innerText = 'Delete';
		delButton.id='delete';
		//delButton.addEventListener('click',confirmCheck,false);
		//不須事件聆聽  只須設定button被按下需要呼叫的方法
		//使用聆聽  不管confirmCheck 按下哪個按鈕 都會先新增一個Task
		document.getElementById('buttons').appendChild(delButton);
		document.getElementById('delete').onclick=confirmCheck;
		
		var checkAllButton = document.createElement('button');
		checkAllButton.innerText = 'Check All';
		checkAllButton.id='checkAll';
		document.getElementById('buttons').appendChild(checkAllButton);
		document.getElementById('checkAll').onclick=checkAllFunc;
		
	 	var unCheckAllButton = document.createElement('button');
		unCheckAllButton.innerText = 'UnCheck All';
		unCheckAllButton.id='unCheckAll';
		document.getElementById('buttons').appendChild(unCheckAllButton);
		document.getElementById('unCheckAll').onclick=unCheckAllFunc; 
	} 
	return false;
}
function confirmCheck(){
	var checkSum = 0;
	//判斷是否有勾選
	for(var i = 0; i<tasks.length;i++){
		var check = document.getElementById("task"+i);
		if(tasks[i]!=undefined){
			if(check.checked){
				if(confirm("Are you sure you want to delete the selected item?")){
					delTask();
				}else{
				}
				break;
			}else{
				checkSum += 1;
			}
		}else{
			checkSum += 1;
		}	
	}
	if(checkSum==tasks.length){
		alert("Please select item(s)");
	}
	
	
	return false;
}
function checkAllFunc(){
	for (i = 0; i < tasks.length; i++){
		var check = document.getElementById("task"+i);
		if(tasks[i]!=undefined){
			check.checked = true ;
		}
	}
	lineThrough();
	return false;
}
 function unCheckAllFunc(){
	for (i = 0; i < tasks.length; i++){
		var check = document.getElementById("task"+i);
		if(tasks[i]!=undefined){
			check.checked = false ;
		}
	}
	lineThrough();
	return false;
} 

function delTask(){

 	for(var i = 0; i<tasks.length;i++){
		var check = document.getElementById("task"+i);
		if(tasks[i]!=undefined){
			if(check.checked){
			//var check 是否有被勾選(checked)
			delete tasks[i];
			}
		}	
	}
	
	var feedback='';
	feedback = '<h3>To-Do List</h3>';
	feedback += '<ol>';		
	for(var i=0; i<tasks.length; i++){
		if(tasks[i]!=undefined){
			feedback += '<li id="list'+i+'">'
			feedback += '<input type ="checkbox" id = "task'+i+'">'+tasks[i]+'</li><br>'; 
		}
		//feedback += '</ol>';
	}
	document.getElementById('feedback').innerHTML = feedback;
	
	lineThrough();

	var checkNum = 0;
	for(var i=0; i<tasks.length; i++){
		if(tasks[i]!=undefined){
			}else{
				checkNum+=1;
			}
	}
	if(checkNum==tasks.length && buttons.childNodes.length >1){
		//當checkNum==tasks.length (當陣列所有元素都是undefined)
		//並且小孩大於1
		buttons.removeChild(buttons.lastChild);
		buttons.removeChild(buttons.lastChild);
		buttons.removeChild(buttons.lastChild);
		feedback = "";
		document.getElementById('feedback').innerHTML = feedback;
	}
	
	return false;	
} 
 function lineThrough(){
	for(var i=0; i<tasks.length; i++){
		if(tasks[i]!=undefined){
			//增加此行判斷  無此行判斷被刪除的list 系統找不到 會當掉
			var check = document.getElementById("task"+i);
			var list = document.getElementById("list"+i);
			if(check.checked){
				list.style.color = 'red';
				list.style.textDecoration = 'line-through';
				list.style.fontStyle = 'oblique';
				list.style.fontWeight = 'bold';
				list.style.fontFamily = 'Comic Sans MS';
			}else{
				//else需要設定  防止勾選後再取消勾選  字體不會復原
				list.style.color = 'steelblue';
				list.style.fontWeight = 'bold';
				list.style.textDecoration = 'none';
				list.style.fontStyle = 'normal';
				list.style.fontFamily = 'Comic Sans MS';
			}
		}
	}
	
} 

window.addEventListener('load',doFirst,false);