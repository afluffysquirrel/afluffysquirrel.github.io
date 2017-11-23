var pass = prompt("Please enter password");

console.log(CryptoJS.AES.decrypt(data[0].password, pass).toString(CryptoJS.enc.Utf8));
if(CryptoJS.AES.decrypt(data[0].password, pass).toString(CryptoJS.enc.Utf8) === ""){
	 window.location.href = '../';
}