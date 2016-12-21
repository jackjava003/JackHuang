var storage = sessionStorage;
function doFirst(){
	var itemString = storage.getItem('addItemList');
	var items = itemString.substr(0,itemString.length-2).split(', ');
	
	newItem = document.createElement('div');
	newTable = document.createElement('table');
	
	for(var key in items){ 
		var itemInfo = storage[items[key]];
		createCartList(items[key], itemInfo); 
	}
	
	subtotal = 0;
	for(var key in items){
			var itemInfo = storage[items[key]];
			subtotal += parseInt(itemInfo.split('|')[2]);
	}
	document.getElementById('subtotal').innerText = subtotal;
	
}

function createCartList(itemKey, itemValue){
	var itemTitle = itemValue.split('|')[0]; 
	var itemImage = 'imgs/'+itemValue.split('|')[1];
	var itemPrice = parseInt(itemValue.split('|')[2]);
	
	var trItemList = document.createElement('tr');
	trItemList.className = 'item';

	
	newTable.appendChild(trItemList);

	//建立商品圖片--第一個td
	var tdImage = document.createElement('td');
	tdImage.style.width = '200px'; 
	
	var img = document.createElement('img');
	img.src = itemImage; 
	img.width = 70; 
	
	tdImage.appendChild(img);
	trItemList.appendChild(tdImage);
	
	
	//建立商品名稱和刪除按鈕--第二個td
	var tdTitle = document.createElement('td')
	tdTitle.style.width = '280px';
	tdTitle.id = itemKey; 
	
	var pTitle = document.createElement('p');
	pTitle.innerText = itemTitle; 
	
	var button = document.createElement('button');
	button.innerText = 'Del';
	button.addEventListener('click',deleteItem,false);
	
	tdTitle.appendChild(pTitle);
	tdTitle.appendChild(button);
	
	trItemList.appendChild(tdTitle);
	
	//建立商品價格--第三個td
	var tdPrice = document.createElement('td');
	tdPrice.style.width = '170px';
	tdPrice.innerText=itemPrice;
	
	trItemList.appendChild(tdPrice);
	
	//建立商品數量--第四個td
	var tdItemCount = document.createElement('td');
	tdItemCount.style.width = '60px';
	var itemCount = document.createElement('input');
	itemCount.type = 'number';
	itemCount.value= '1';
	itemCount.min= '0';
	itemCount.addEventListener('input',inputChange,false);
	
	tdItemCount.appendChild(itemCount);
	trItemList.appendChild(tdItemCount);
	

	newItem.appendChild(newTable);
	var cartList = document.getElementById('cartList');
	cartList.appendChild(newItem);
	
	
}
function deleteItem(){

	var itemId = this.parentNode.getAttribute('id');
	
	//刪除該筆資料之前,先將金額扣除
	var valueText = storage[itemId]; 
	var valueNum = this.parentNode.nextSibling.nextSibling.firstChild.value;
	subtotal -= valueNum*parseInt(valueText.split('|')[2]);
	document.getElementById('subtotal').innerText = subtotal;
	
	//在清除storage的資料
	storage['addItemList'] = storage['addItemList'].replace(itemId+', ','');
	storage.removeItem(itemId);
	//再將該筆tr刪除
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

}
function inputChange(){
	var inputValue = this.value;
	var priceId = this.parentNode.previousSibling.previousSibling.getAttribute('id');
	var priceText = storage[priceId];
	subtotal -= this.parentNode.previousSibling.innerText;
	var pricetotal = inputValue*parseInt(priceText.split('|')[2]);
	this.parentNode.previousSibling.innerText = pricetotal;
	subtotal += pricetotal;
	
	document.getElementById('subtotal').innerText = subtotal;
	
	
}

window.addEventListener('load', doFirst, false);
