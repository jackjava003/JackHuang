
function doFirst(){
	document.getElementById('theForm').onsubmit=calculate;
	//����     ��k(�Phtml�������p)    
}
function calculate(){
	var quantity = document.getElementById('quantity').value;
	//  .value�n������J�᪺��
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;

	var total = quantity * price;
	tax = tax/100;
	tax++;
	total = total * tax;
	total = total - discount;
	total = total.toFixed(2);  //�榡��
	document.getElementById('total').value = total;
	return false;

	//alert(quantity);
	//alert(price);
	//alert(tax);
	//alert(discount);
	//alert(total);

}
window.addEventListener('load',doFirst,false);