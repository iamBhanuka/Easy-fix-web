
 function validateForm() {
    var uname = document.forms["reg-form"]["username"].value;
    
    var tp = document.forms["reg-form"]["tp"].value;
    var password = document.forms["reg-form"]["password"].value;
    var cpassword = document.forms["reg-form"]["cpassword"].value;
    if (uname == "") {
        alert("Fill the name");
        return false;
    }else if(email==""){
    	alert("Fill the email");
    	return false;
    }
    else if(tp==""){
    	alert("Fill the Telephone No.");
    	return false;
    }
    else if(password==""){
    	alert("Choose a password");
    	return false;
    }else if(cpassword==""){
    	alert("Enter the same password again");
    	return false;
    }

}

function checkEmail() {
    var email = document.forms["reg-form"]["email"].value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    return false;
 }
}