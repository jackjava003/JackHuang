var tasks = []; //�Ű}�C length = 0
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
	
	//�W�������ʺA�W�[task �W�������ʺA�W�[���s
	buttons = document.getElementById('buttons');
	
	if(buttons.childNodes.length >3){
		//�ˬdlength��html�����i���ť�
		//��id(buttons �bdiv��)���Ĥl�j��1���ɭ� ���R���̫᪺�p��
		//(1=input �n�j��1���M�|�R��add���s)
		//���B�R�� �U���|�A�W�[
		buttons.removeChild(buttons.lastChild);
		buttons.removeChild(buttons.lastChild);
		buttons.removeChild(buttons.lastChild);
	}
	if(tasks.length !=0){
		//�u�ntasks������ ������0  delete���s�N�|�ʺA�W�[
		var delButton = document.createElement('button');
		delButton.innerText = 'Delete';
		delButton.id='delete';
		//delButton.addEventListener('click',confirmCheck,false);
		//�����ƥ��ť  �u���]�wbutton�Q���U�ݭn�I�s����k
		//�ϥβ�ť  ����confirmCheck ���U���ӫ��s ���|���s�W�@��Task
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
	//�P�_�O�_���Ŀ�
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
			//var check �O�_���Q�Ŀ�(checked)
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
		//��checkNum==tasks.length (��}�C�Ҧ��������Oundefined)
		//�åB�p�Ĥj��1
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
			//�W�[����P�_  �L����P�_�Q�R����list �t�Χ䤣�� �|��
			var check = document.getElementById("task"+i);
			var list = document.getElementById("list"+i);
			if(check.checked){
				list.style.color = 'red';
				list.style.textDecoration = 'line-through';
				list.style.fontStyle = 'oblique';
				list.style.fontWeight = 'bold';
				list.style.fontFamily = 'Comic Sans MS';
			}else{
				//else�ݭn�]�w  ����Ŀ��A�����Ŀ�  �r�餣�|�_��
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