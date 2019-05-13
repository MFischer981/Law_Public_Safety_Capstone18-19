// Toggle menu and wrapper classes.
function menuOpen() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("wrapper").classList.toggle("menu");
}

// On submit run validation functions.
function runSubmit() {
    validateName();
    validateCompany();
    validatePhone();
    validateEmail();
    validateComment();
}

// Check if form field content contains a value, if not display validation message.
function validateName() {
    var formName = document.getElementById("name");
    if (formName.validity.valueMissing) {
        formName.setCustomValidity("Please enter your name.")
    } else {
        formName.setCustomValidity("");
    }
}

// Check if form field content contains a value, if not display validation message.
function validateCompany() {
    var formCompany = document.getElementById("company");
    if (formCompany.validity.valueMissing) {
        formCompany.setCustomValidity("Please enter your company's name.")
    } else {
        formCompany.setCustomValidity("");
    }
}

// Check if form field content contains a value, if not display validation message.
function validatePhone() {
    var formPhone = document.getElementById("phone");
    if (formPhone.validity.valueMissing) {
        formPhone.setCustomValidity("Please enter your phone number.")
    } else {
        formPhone.setCustomValidity("");
    }
}

// Check if form field content contains a value, if not display validation message.
function validateEmail() {
    var formPhone = document.getElementById("email");
    if (formPhone.validity.valueMissing) {
        formPhone.setCustomValidity("Please enter your email address.")
    } else {
        formPhone.setCustomValidity("");
    }
}

// Check if form field content contains a value, if not display validation message.
function validateComment() {
    var formComment = document.getElementById("comment");
    if (formComment.validity.valueMissing) {
        formComment.setCustomValidity("Please enter a comment.")
    } else {
        formComment.setCustomValidity("");
    }
}

// set countdown fate.
var countDownDate = new Date("Aug 1, 2019").getTime();

// Set interval to value of x and run function.
var x = setInterval(function () {

    // Set variable to current time.
    var now = new Date().getTime();

    // Find difference between date and now.
    var distance = countDownDate - now;

    // Calculate number of days, hours, minutes, seconds using distance value.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display values in element with id of time.
    document.getElementById("time").innerHTML = days + " Days " + hours + " Hours " +
        minutes + " Minutes " + seconds + " Seconds ";

    // If distance is zero change content.
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "WestMEC has Started!";
    }
}, 1000);