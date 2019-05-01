
calcMyTip = function(){
	var myBill = document.getElementById('form').bill.value;
	var myPer = document.getElementById('form').percentage.value;

	//percentage is empty	
	if(myBill === ""){
		alert("Please enter the amount.");
		return;
	}else if(myPer === "0"){
		alert("Please choose one percentage.");
		return;
	}
	

	//calculate the tip
	var tipPrice = myBill * myPer;
	tipPrice = Math.round(tipPrice * 100)/100;
	tipPrice = tipPrice.toFixed(2);

	//string to number
	myBill = parseFloat(myBill);
	tipPrice = parseFloat(tipPrice);
	
	document.getElementById('tip').innerHTML = tipPrice;
	document.getElementById('total').innerHTML = tipPrice +myBill ;

}
numClear = function(){
	$("form")[0].reset();
	$("#tip").text("0.00");
	$("#total").text("0.00");
	return;
}

