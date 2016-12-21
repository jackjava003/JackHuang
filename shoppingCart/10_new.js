var storage = sessionStorage;
function doFirst(){
	if(storage['addItemList'] == null){
		storage['addItemList'] = '';
	}
	var spans = document.querySelectorAll('.addButton');
	for(var i = 0; i<spans.length; i++){
		spans[i].addEventListener('click',function(){
			var teddyInfo = document.querySelector('#'+this.id+' input').value;
			addItem(this.id,teddyInfo);
		},false)
	}
	
}

function addItem(itemId,itemValue){
	var image = document.createElement('img');
	image.src = 'imgs/' + itemValue.split('|')[1];
	image.id = 'itemImageSelect';

	var title = document.createElement('span');
	title.innerText = itemValue.split('|')[0];
	title.id = 'titleSelect';
	
	var price = document.createElement('span');
	price.innerText = itemValue.split('|')[2];
	price.id = 'priceSelect';
	
	var newItem = document.getElementById('newItem');
	if(newItem.hasChildNodes()){
		while(newItem.childNodes.length>=1){
			newItem.removeChild(newItem.firstChild);
		}
	}
	newItem.appendChild(image);
	newItem.appendChild(title);
	newItem.appendChild(price);
	
	if(storage[itemId]){
		alert('You have checked');
	}else{
		storage[itemId]=itemValue;
		storage['addItemList'] += itemId+', ';
	}

	var itemString = storage.getItem('addItemList');
	var items = itemString.substr(0,itemString.length-2).split(', ');

	var subtotal = 0;
	for(var d=0;d<items.length;d++){
		var itemInfo = storage.getItem(items[d]);
		subtotal += parseInt(itemInfo.split('|')[2]);
	}
	//上下方法皆可
	
	/* for(var key in items){ //items[key]
			var itemInfo = storage[items[key]];
		//storage[key] 會傳回value   
		//for(var key in items)會抓出key  用storage方法 把值放到itemInfo
		//  var itemInfo = storage.getItem([items[key]]);
			subtotal += parseInt(itemInfo.split('|')[2]);
	} */
	
	document.getElementById('itemCount').innerText = items.length;
	document.getElementById('subtotal').innerText = subtotal;
	
}

window.addEventListener('load', doFirst, false);





