var NightMode = document.querySelector("#nightmode");
var body = document.querySelector("#body");
var h1about = document.querySelector("#h1about");
var aboutp = document.querySelector("#aboutp");
var lukito = document.querySelector(".myname");
var DayMode = document.querySelector("#daymode");
var footer = document.querySelector("#footer");
var lucas = document.querySelector(".lucas");
var main = document.querySelector("#main");
var Send = document.querySelector(".Send1");
var Message = document.querySelector(".message");
var Name = document.querySelector(".saxeli2");
var Mail = document.querySelector(".email2");
var Subject = document.querySelector(".subject");
var SignIn = document.querySelector(".Send");
var Password = document.querySelector(".password2");
var Mail2 = document.querySelector(".email3");
var User = document.querySelector(".user10");
var Username = document.querySelector(".Username");
var Username2;

NightMode.addEventListener("click", function() {
	body.style.backgroundColor = "rgb(60, 60, 60)";
	h1about.style.color = "#fff";
	aboutp.style.color = "#fff";
	lukito.style.color = "#fff";
});
DayMode.addEventListener("click", function() {
	body.style.backgroundColor = "#fff";
	h1about.style.color = "black";
	aboutp.style.color = "black";
	lukito.style.color = "black";
});
Send.addEventListener("click", function() {
	Message.value = "";
	Name.value = "";
	Mail.value = "";
	Subject.value = "";
	alert("Message Sent");
});
SignIn.addEventListener("click", function() {
	if (Username.value == "") {
		alert("Enter your Username!");
		User.style.display = "none";
	} else {
		var Username2 = Username.value;
		alert("Signed In");
	}
	User.innerHTML = "User: " + Username2;
	Password.value = "";
	Mail2.value = "";
	Username.value = "";
});