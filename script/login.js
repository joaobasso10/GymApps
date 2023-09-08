const login = document.getElementById("login");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
const span = document.getElementById("span");

const loginName = "joao";
const senhaValue = 1234;

botao.addEventListener("click", ()=>{
    if(login.value = loginName && senha.value == senhaValue){
        window.location.href = "/GymApps/index.html";
    }else{
        login.value = "";
        senha.value = "";
        span.innerText = "Login ou senha incorretos"
    }
})

