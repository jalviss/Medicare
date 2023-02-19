function login()
{
    var email = document.getElementById("emails").value;
    var password = document.getElementById("pass").value;
    if (email == ""){
        alert("Email must be filled");
        return false;
    } 
    else if (password == ""){
        alert("Password must be filled");
        return false;
    } 
    else if (emailCheck(email) == false){
        alert("Email is not valid");
        return false;
    } 
    else{
        alert("Login Success");
        location.reload();
    }
}

function emailCheck(email){
	if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 ){
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
		return false;
	}
	else{
		return true;
	}
}

function register(){
    var password = document.getElementById("pass").value;
    var passConfirm = document.getElementById("passConfirm").value;
    if (password == ""){
        alert("Password must be filled");
        return false;
    } 
    else if (passConfirm == ""){
        alert("Password Confirmation must be filled");
        return false;
    }
    else if (password != passConfirm){
        alert("Password Confirmation must be same with Password");
        return false;
    }
}

function burgerToggle(){
    var x = document.getElementById("mobileNav");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    
}

function productToggle(){
    var x = document.getElementById("productDropdown");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}