const passwordBox = document.getElementById("password");
const len = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="1234567890";
const symbol = "!@#$%^&*()\<>-=";
const allCahr = upperCase+lowerCase+number+symbol;

function createPassword(){
    let password="";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+= symbol[Math.floor(Math.random()*symbol.length)];

    while(password.length<len){
        password+=allCahr[Math.floor(Math.random()*allCahr.length)];
    }
    passwordBox.value = password;

}
const gen = document.getElementById("generate");
gen.addEventListener("click",createPassword);

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

const copy = document.getElementById("cpy");
copy.addEventListener("click",copyPassword);
