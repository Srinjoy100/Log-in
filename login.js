let btnSignup=document.getElementById("btnsign");
let btnLogin=document.getElementById("btnlog");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

btnLogin.onclick=function()
{
    nameField.style.maxHeight="0";
    title.innerHTML="Log-in";
    btnSignup.classList.add("disable");
    btnLogin.classList.remove("disable");
}

btnSignup.onclick=function()
{
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign-Up";
    btnSignup.classList.remove("disable");
    btnLogin.classList.add("disable");
}