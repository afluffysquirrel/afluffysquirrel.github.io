if(CryptoJS.AES.decrypt(data[0].password, pass).toString(CryptoJS.enc.Utf8) != ""){
	document.getElementById("data-area").innerHTML = "";
	for (i = 0; i < data.length; i++) {
		document.getElementById("data-area").innerHTML += "<p><center>" + data[i].site + " : " + "<button onclick='alert(" + '"' + CryptoJS.AES.decrypt(data[i].password, pass).toString(CryptoJS.enc.Utf8) + '"' + ")'>View</button>"  + "</center></p>";
	}
}