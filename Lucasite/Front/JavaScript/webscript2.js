var NightMode = document.querySelector("#nightmode");
var body = document.querySelector("#body");
var footer = document.querySelector("#footer");
var lucas = document.querySelector("#makings");
var alot = document.querySelector("#alot");
var DayMode = document.querySelector("#daymode");
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
var page = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var days = document.querySelector("#days1");
var days2 = document.querySelector("#days2");
var days3 = document.querySelector("#days3");
var Service = document.querySelector(".Serviceh1");
var ServiceButton = document.querySelector(".booknow");
var ServiceButton2 = document.querySelector(".booknow1");
var ServiceButton3 = document.querySelector(".booknow2");
var Username2;


NightMode.addEventListener("click", function() {
	body.style.backgroundColor = "rgb(60, 60, 60)";
	lucas.style.color = "#79C5D6";
	alot.style.color = "#79C5D6";
	page.style.color ="#fff";
	page2.style.color ="#fff";
	page3.style.color ="#fff";
	days.style.color ="#fff";
	days2.style.color ="#fff";
	days3.style.color ="#fff";
	Service.style.color = "#fff";
});
DayMode.addEventListener("click", function() {
	body.style.backgroundColor = "#fff";
	lucas.style.color = "#3A54B4";
	alot.style.color = "#3A54B4";
	page.style.color ="black";
	page2.style.color ="black";
	page3.style.color ="black";
	days.style.color ="black";
	days2.style.color ="black";
	days3.style.color ="black";
	Service.style.color = "black";
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
ServiceButton.addEventListener("click", function() {
	alert("Your Appointment has been Booked, it will take some time, so if you want to get it done quicker, just Contact me." );
});
ServiceButton2.addEventListener("click", function() {
	alert("Your Appointment has been Booked, it will take some time, so if you want to get it done quicker, just Contact me." );
});
ServiceButton3.addEventListener("click", function() {
	alert("Your Appointment has been Booked, it will take some time, so if you want to get it done quicker, just Contact me." );
});