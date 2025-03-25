const inputPassword = document.getElementById("password");
const tocPassword= document.getElementById("tocarPassowrd");


tocPassword.addEventListener("click", function(){
    if(inputPassword.type === "password"){
        inputPassword.type="text";
        tocPassword.src="/loginMovil/ojo.png";
       
    } else {
        inputPassword.type="password";
        tocPassword.src="/loginMovil/ojo.png";
    }


});