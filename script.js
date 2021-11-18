
//Password Generate Function 
function getpassword(){

    //Create Characters & Password length
    var chars = "@$0123456789$%abcdefghijklmnopqrstuvwxyz&*ABCDEFGHIJKLMNOPQRXYZ*!+";
    var passwordLength = 10;
    var password = "";

    //generate password using for loop
    for(var i=0; i<passwordLength; i++){
        var randomNo = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNo, randomNo + 1);

        document.getElementById("Password").value = password;
    }
}

//Password Copy Function 
function copyPassword(){
    var copyText = document.getElementById("Password");

    //Check Password 
    if(copyText.value.length == 0){
        document.getElementById("alert-box").style.color = "red"
        document.getElementById("alert-box").innerHTML = "Password Not Generated";
    }

    else{

        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        document.getElementById("alert-box").style.color = "white"
        document.getElementById("alert-box").innerHTML = "New Password Copied";

    }

    setTimeout(function(){
        document.getElementById("alert-box").innerHTML = "";
        }, 2000);

}