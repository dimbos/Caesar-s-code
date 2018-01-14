//шифруем

document.getElementById('in').oninput = function(){
	const offset = 3; //смещение на 3 символа
	let help = document.getElementById('help');

	let str = this.value; //введеное значение

 //из сомвола в код
	console.log(str.charCodeAt(0));

	let out = ''; //итоговая строка

	for(let i = 0; i < str.length; i++){
		let code = str.charCodeAt(i);

		code = code + offset;

		out += String.fromCharCode(code);
	}

	document.getElementById('out').innerHTML = out;
}

//расшифровка
document.getElementById('out2').oninput = function(){
	const offset = 3;

	let str = this.value; //введеное значение

	let out = '';

		for(let i = 0; i < str.length; i++){
		let code = str.charCodeAt(i);

		code = code - offset;

		out += String.fromCharCode(code);
	}

	document.getElementById('out3').innerHTML = out;
}