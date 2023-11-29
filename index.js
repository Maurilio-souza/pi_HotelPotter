var nome = document.getElementById("nome");
var senhaDigitada = document.getElementById("senha");
var modalBg = document.getElementById("modal-bg-login");
var senhaErrada = document.getElementById("senha-errada");
var logged = sessionStorage.getItem("logged");
var body = document.getElementById("body")
//var primeiroAcesso = sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer");



if (logged == "false") {
    openModal();
}
else if (logged == "true") {
    sumir();
}

function login() {
    var senha = senhaDigitada.value.toLowerCase();
    if (senha == "eujurosolenementenaofazernadadebom" || senha == "eu juro solenemente nao fazer nada de bom" || senha == "eujurosolenementenãofazernadadebom" || senha == "eu juro solenemente não fazer nada de bom" || senha == "eujuronaofazernadadebom" || senha == "eu juro não fazer nada de bom" || senha == "eu juro" || senha == "eujuro") {
        sumir();
        sessionStorage.setItem("logged", true);
        senhaDigitada.value = "";
        nome.value = "";
        senhaErrada.style.display = "none";
    }
    else {
        senhaErrada.innerText = `Os Srs. Douglas, Antônio, Breno, Maurílio, Alephe e Diego apresentam seus cumprimentos a ${nome.value} e pede para que não meta seu nariz anormalmente grande no que não é da sua conta`
        senhaErrada.style.display = "flex";
        senhaDigitada.value = "";
        nome.value = "";
    }

}

function openModal() {
    modalBg.style.display = "flex";
    sessionStorage.setItem("logged", "false");
    body.style.position = "fixed"
}


function sumir() {
    modalBg.style.display = "none";
    body.style.position = "relative"
}

