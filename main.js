const submitBtn = document.getElementById("submit-btn");
const nameError = document.getElementById("nameErr");
const tick = document.getElementById("toggleTick");
const emailError = document.getElementById("emailErr");
const passError = document.getElementById("passErr");

// when user click submit btn-
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (validateName() && validateEmail() && validatePassword()) {
		alert("Form Submitted Successfully");
	}
});

// validate Full Name
function validateName() {
	let name = document.getElementById("name").value;

	// input empty?
	if (name.length == 0) {
		nameError.innerHTML = "Name is required";
		return false;
	}
	// pattern matching?
	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameErr.innerHTML = "Write full Name";
		return false;
	}


	nameErr.innerHTML = "";
	return true;
}

// validate Email
function validateEmail() {
	let email = document.getElementById("email").value;

	// input empty?
	if (email.length == 0) {
		emailError.innerHTML = "Email is required";
		return false;
	}

	// pattern matching?
	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		emailError.innerHTML = "Enter Valid Email";
		return false;
	}


	emailError.innerHTML = "";
	return true;
}

// validate Password
function validatePassword() {
	let password = document.getElementById("password").value;

	// input empty?
	if (password.length == 0) {
		passError.innerHTML = "Password is required";
		return false;
	}

	// pattern matching?
	if (
		!password.match(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
		)
	) {
		passError.innerHTML =
			"Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
		return false;
	}


	passError.innerHTML = "";
	return true;
}
