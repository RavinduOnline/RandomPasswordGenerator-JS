function getpassword(){

    var chars = "@$0123456789$%abcdefghijklmnopqrstuvwxyz&*ABCDEFGHIJKLMNOPQRXYZ*^+";
    var passwordLength = 10;
    var password = "";

    for(var i=0; i<passwordLength; i++){
        var randomNo = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNo, randomNo + 1);

        document.getElementById("Password").value = password;
    }
    

}