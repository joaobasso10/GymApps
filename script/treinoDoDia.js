///////////////////////////////////////
const logo = document.getElementById("logo");

logo.addEventListener("click", ()=>{
    window.location.href = "/GymApps/index.html";
})
////////////////////////////////////////

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

///////////////////////////////////////////
///////////////////////////////////////////

// Array com os nomes dos dias da semana
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

// Obter a data atual
const dataAtual = new Date();

// Obter o dia da semana (0 - Domingo, 1 - Segunda, ..., 6 - Sábado)
const diaDaSemana = dataAtual.getDay();

// Retornar o nome do dia da semana no formato desejado
const nomeDiaDaSemana = diasDaSemana[diaDaSemana];

console.log(`Hoje é ${nomeDiaDaSemana}`);



const lista = document.getElementById("lista");
const diaDaSemanaTitulo = document.getElementById("diaDaSemanaTitulo");

diaDaSemanaTitulo.innerHTML = nomeDiaDaSemana;


const Segunda = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste segunda</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;
const Terça = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste Terça</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;
const Quarta = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste Quarta</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;
const Quinta = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste Quinta</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;
const Sexta = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste Sexta</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;
const Sabado = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste Sabado</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;
const Domingo = `
<div class="exercicio">
    <div class="listaExercicio nome">
        <h2>teste Domingo</h2>
    </div>
    <div class="listaExercicio musculo">
        <h2 class="pill pernas"> <i class="fas fa-circle"></i> teste</h2>
    </div>
</div>
`;



function diaDaSemana2(){
    if( nomeDiaDaSemana == "Segunda" ){
        lista.innerHTML = Segunda;
    } else if ( nomeDiaDaSemana == "Terça" ){
        lista.innerHTML = Terça;
    }else if ( nomeDiaDaSemana == "Quarta" ){
        lista.innerHTML = Quarta;
    }else if ( nomeDiaDaSemana == "Quinta" ){
        lista.innerHTML = Quinta;
    }else if ( nomeDiaDaSemana == "Sexta" ){
        lista.innerHTML = Sexta;
    }else if ( nomeDiaDaSemana == "Sabado" ){
        lista.innerHTML = Sabado;
    }else if( nomeDiaDaSemana == "Domingo" ){
        lista.innerHTML = Domingo;
    }

};

diaDaSemana2();