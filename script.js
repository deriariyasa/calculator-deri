function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

function bersih(){
	document.form.textarea.value = "";
}

function del(){
	var a = document.form.textarea.value;
	document.form.textarea.value = a.substring(0,a.length-1);
}

function hasil(){
	var a = document.form.textarea.value;
	if(a == ""){
		document.form.textarea.value = "";
	}else{
		document.form.textarea.value = eval(a);
	}
}
