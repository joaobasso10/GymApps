// voltar pagina inicial
const logo = document.getElementById("logo");

logo.addEventListener("click", ()=>{
    window.location.href = "/index.html";
})
/////////////////////////////////////////////



const popUpFoto = document.getElementById("popUpFoto");
const perfil = document.getElementById("perfil");
const closePopUp = document.getElementById("close");

perfil.addEventListener("click", ()=>{
    popUpFoto.style.display = "flex";
})
closePopUp.addEventListener("click", ()=>{
    popUpFoto.style.display = "none";
})

const troca = document.getElementById("troca");
const trocaImage = document.getElementById("trocaImage");
const closeTroca = document.getElementById("closeTroca");


troca.addEventListener("click", ()=>{
    trocaImage.style.display = "flex";
})
closeTroca.addEventListener("click", ()=>{
    trocaImage.style.display = "none";
})