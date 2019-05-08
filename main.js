function menuOpen() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("wrapper").classList.toggle("menu");
}

function runSubmit() {
    validateName();
    validateCompany();
    validatePhone();
    validateEmail();
    validateComment();
}

function validateName() {
    var formName = document.getElementById("name");
    if (formName.validity.valueMissing) {
        formName.setCustomValidity("Please enter your name.")
    } else {
        formName.setCustomValidity("");
    }
}

function validateCompany() {
    var formCompany = document.getElementById("company");
    if (formCompany.validity.valueMissing) {
        formCompany.setCustomValidity("Please enter your company's name.")
    } else {
        formCompany.setCustomValidity("");
    }
}

function validatePhone() {
    var formPhone = document.getElementById("phone");
    if (formPhone.validity.valueMissing) {
        formPhone.setCustomValidity("Please enter your phone number.")
    } else {
        formPhone.setCustomValidity("");
    }
}

function validateEmail() {
    var formPhone = document.getElementById("email");
    if (formPhone.validity.valueMissing) {
        formPhone.setCustomValidity("Please enter your email address.")
    } else {
        formPhone.setCustomValidity("");
    }
}

function validateComment() {
    var formComment = document.getElementById("comment");
    if (formComment.validity.valueMissing) {
        formComment.setCustomValidity("Please enter a comment.")
    } else {
        formComment.setCustomValidity("");
    }
}


var countDownDate = new Date("Aug 1, 2019 0:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("time").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "WestMEC has Started!";
  }
}, 1000);