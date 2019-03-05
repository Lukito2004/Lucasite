var SignUp = document.querySelector("#Signupen");
var	Name = document.querySelector(".saxeli");
var	LastName = document.querySelector(".gvari");
var	Email = document.querySelector("#inputEmail3");
var Password = document.querySelector("#inputPassword3");
var RepeatPassword = document.querySelector("#inputPassword4");
var Username = document.querySelector("#Username2");
var Username2;
var Password2;
var RepeatPassword2;

SignUp.addEventListener("click", function() {
	var Password2 = Password.value;
	var RepeatPassword2 = RepeatPassword.value;
	if (Username.value == "") {
		alert("Enter your Username!");
	}
	if (Name.value == "") {
		alert("Enter your Name!");
	}
	if (LastName.value == "") {
		alert("Enter your Last Name!");
	}
	if (Email.value == "") {
		alert("Enter your Email!");
	}
	if (Password.value == "") {
		alert("Enter your Password");
	}
	if (RepeatPassword.value == "") {
		alert("Repeat your Password");
	}
	if (Password2 != RepeatPassword2 && Password.value != "" && RepeatPassword.value != "") {
		alert("You typed your passwords incorrectly!");
		Password.value = "";
		RepeatPassword.value = "";
	}
	if (Username.value != "" && Password2 == RepeatPassword2 && Name.value != "" && LastName.value != "" && Email.value != "" && Password.value != "" && RepeatPassword.value != "") {
		var Username2 = Username.value;
		alert("Successfuly Registered, Welcome: " + Username2);
		Name.value = "";
		LastName.value = "";
		Email.value = "";
		Password.value = "";
		RepeatPassword.value = "";
		Username.value = "";
	}
});
