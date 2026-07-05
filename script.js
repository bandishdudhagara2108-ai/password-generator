const password = document.getElementById("password");

const slider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.querySelector(".generate");
const copyBtn = document.getElementById("copyBtn");
const toggleBtn = document.getElementById("toggleBtn");

const strengthBar = document.getElementById("strengthBar");
const strengthLabel = document.getElementById("strengthLabel");
const message = document.getElementById("message");

slider.addEventListener("input",()=>{
    lengthValue.textContent=slider.value;
    generatePassword();
});

generateBtn.addEventListener("click",generatePassword);

function generatePassword(){

    let chars="";

    if(uppercase.checked)
        chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(lowercase.checked)
        chars+="abcdefghijklmnopqrstuvwxyz";

    if(numbers.checked)
        chars+="0123456789";

    if(symbols.checked)
        chars+="!@#$%^&*()_+-={}[]<>?/";

    if(chars===""){
        alert("Select at least one option.");
        return;
    }

    let pass="";

    for(let i=0;i<slider.value;i++){
        pass+=chars[Math.floor(Math.random()*chars.length)];
    }

    password.value=pass;

    updateStrength(pass);
}

function updateStrength(pass){

    let score=0;

    if(pass.length>=8) score++;
    if(pass.length>=12) score++;
    if(/[A-Z]/.test(pass)) score++;
    if(/[a-z]/.test(pass)) score++;
    if(/[0-9]/.test(pass)) score++;
    if(/[^A-Za-z0-9]/.test(pass)) score++;

    if(score<=2){

        strengthBar.style.width="30%";
        strengthBar.style.background="#ef4444";
        strengthLabel.innerHTML="Weak";

    }else if(score<=4){

        strengthBar.style.width="65%";
        strengthBar.style.background="#f59e0b";
        strengthLabel.innerHTML="Medium";

    }else{

        strengthBar.style.width="100%";
        strengthBar.style.background="#22c55e";
        strengthLabel.innerHTML="Strong";

    }

}

copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(password.value);

    message.innerHTML="Password Copied ✅";

    copyBtn.innerHTML="✅";

    setTimeout(()=>{

        message.innerHTML="";
        copyBtn.innerHTML="📋";

    },1500);

});

toggleBtn.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";
        toggleBtn.innerHTML="🙈";

    }else{

        password.type="password";
        toggleBtn.innerHTML="👁️";

    }

});

generatePassword(password.value=pass;);
const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

};

const history=document.getElementById("history");

const li=document.createElement("li");

li.innerHTML=pass;

history.prepend(li);

if(history.children.length>5){

history.removeChild(history.lastChild);

}
