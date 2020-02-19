var keycard = false;
var keysecurityCode = false;
var keyname = false;
var keyaddress = false;
var keycity = false;
var keycode = false;
var keymail = false;

//validation for card
function cardvalidation() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/; 
    var card = document.getElementById("card");
    if (!card.value.match(regex)) {
        card.style.borderColor = "red";
        document.getElementById("ValidCard").style.display = "block";
        keycard = false;
    }
    else {
        card.style.borderColor = "darkturquoise";
        document.getElementById("ValidCard").style.display = "none";
        keycard = true;
    }
}
//validation for the security code
function validateSecurityCode() {
    var securityCode = document.getElementById("securitycode");
    var regex = /^[0-9]{3}$/;
    if (!securityCode.value.match(regex)) {
        securityCode.style.borderColor = "red";
        document.getElementById("ValidSecurity").style.display = "block";
        keysecurityCode = false;
    }
    else {
    securityCode.style.borderColor = "darkturquoise";
        document.getElementById("ValidSecurity").style.display = "none";
        keysecurityCode = true;
    }
}

//validation for name
function validateName() {
    var name = document.getElementById("name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.value.match(regex)) {
        name.style.borderColor = "red";
        document.getElementById("ValidName").style.display = "block";
        keyname = false;
    }
    else {
        keyname = true;
        name.style.borderColor = "darkturquoise";
        document.getElementById("ValidName").style.display = "none";
    }
}
//validation for zip code
function validateZipCode() {
    var code = document.getElementById("zip");
    var regex = /^(?:6[0-9]{5})$/;
    if (!code.value.match(regex)) {
        code.style.borderColor = "red";
        document.getElementById("ValidZip").style.display = "block";
        keycode = false;
    }
    else {
        keycode = true;
        code.style.borderColor = "darkturquoise";
        document.getElementById("ValidZip").style.display = "none";
    }
}

//validation for Address
function validateAddress() {
    var address= document.getElementById("address");
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    if (!address.value.match(regex)) {
        address.style.borderColor = "red";
        keyaddress = false;
        document.getElementById("ValidAddress").style.display = "block";
    }
    else {
        address.style.borderColor = "darkturquoise";
        document.getElementById("ValidAddress").style.display = "none";
        keyaddress = true;
    }

}

//validation for city
function validateCity() {
    var city = document.getElementById("city");
    var regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
    if (!city.value.match(regex)) {
        city.style.borderColor = "red";
        keycity = false;
        document.getElementById("ValidCity").style.display = "block";
    }
    else {
        keycity = true;
        city.style.borderColor = "darkturquoise";
        document.getElementById("ValidCity").style.display = "none";
    }
}

//validation for region
function validateRegion() {
    var Region = document.getElementById("region");
    var regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
    if (!Region.value.match(regex)) {
        Region.style.borderColor = "red";
        document.getElementById("Validregion").style.display = "block";
    }
    else {
        Region.style.borderColor = "darkturquoise";
        document.getElementById("Validregion").style.display = "none";
    }
}

//validation for phone number
function validatePhoneNo() {
    var phone = document.getElementById("telephone");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phone.value.match(regex)) {
        phone.style.borderColor = "red";
        document.getElementById("Validphone").style.display = "block";
    }
    else {
        phone.style.borderColor = "darkturquoise";
        document.getElementById("Validphone").style.display = "none";
    }
}

//validation for fax
function validateFax() {
    var Fax = document.getElementById("fax");
    var regex = /^\+?[0-9]{6,}$/;
    if (!Fax.value.match(regex)) {
        Fax.style.borderColor = "red";
        document.getElementById("ValidFax").style.display = "block";
    }
    else {
        Fax.style.borderColor = "darkturquoise";
        document.getElementById("ValidFax").style.display = "none";
    }
}

//validation for mail address
function validateEmail() {
    var mail = document.getElementById("mail");
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!mail.value.match(regex)) {
        mail.focus();
        keymail = false;
        mail.style.borderColor = "red";
        document.getElementById("ValidMail").style.display = "block";
    }
    else {
        keymail = true;
        mail.style.borderColor = "darkturquoise";
        document.getElementById("ValidMail").style.display = "none";
    }
}
//cancel operation
function cancelOperation() {
    alert("Payment Cancel");
}

//submit operation process
function submitOperation() {
    cardvalidation();
    validateSecurityCode();
    validateName();
    validateZipCode();
    validateAddress();
    validateCity();
    validateEmail();
    if (keycard && keyaddress && keycity && keycode && keymail && keyname && keysecurityCode) {
        alert("payment successful..");
    }
}
