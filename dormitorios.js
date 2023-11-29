var grifinoria = {
    nome: "Suíte Grifinória",
    valor: 249.99,
    imagem: "img/Suíte Grifinória.webp",
    acessibilidade: "Imagem de uma suíte tematizada com simbolos da casa Grifinória de Harry Potter",
    classeDaImagem: "grifinoria",
    imagemBrasao: "img/Grifinória.webp",
    acessibilidadeBrasao: "Imagem do brasão da casa Grifinória de Hary Potter",
    classeDoInput: "grifinoria-input",

}
var sonserina = {
    nome: "Suíte Sonserina",
    valor: 249.99,
    imagem: "img/Suíte Sonserina.png",
    acessibilidade: "Imagem de uma suíte tematizada com simbolos da casa Sonserina de Harry Potter",
    classeDaImagem: "sonserina",
    imagemBrasao: "img/Sonserina.webp",
    acessibilidadeBrasao: "Imagem do brasão da casa Sonserina de Hary Potter",
    classeDoInput: "sonserina-input",
}
var corvinal = {
    nome: "Suíte Corvinal",
    valor: 199.99,
    imagem: "img/Suíte Corvinal.webp",
    acessibilidade: "Imagem de uma suíte tematizada com simbolos da casa Corvinal de Harry Potter",
    classeDaImagem: "corvinal",
    imagemBrasao: "img/Corvinal.webp",
    acessibilidadeBrasao: "Imagem do brasão da casa Sonserina de Hary Potter",
    classeDoInput: "corvinal-input",

}
var lufa = {
    nome: "Suíte Lufa-Lufa",
    valor: 169.99,
    imagem: "img/Suíte Lufa-Lufa.jpg",
    acessibilidade: "Imagem de uma suíte tematizada com simbolos da casa Lufa-Lufa de Harry Potter",
    classeDaImagem: "lufa-lufa",
    imagemBrasao: "img/Lufa-Lufa.webp",
    acessibilidadeBrasao: "Imagem do brasão da casa Lufa-Lufa de Hary Potter",
    classeDoInput: "lufa-input",
}

var dumbleodore = {
    nome: "Dumbleodore`s Room",
    valor: 499.99,
    imagem: "img/quarto-presidencial.png",
    classeDaImagem: "dormitorio-presidencial",
    imagemBrasao: "img/brasãoDumbleodore.png",
    acessibilidadeBrasao: "Imagem do brasão de uma Fênix, representando o quarto Presidencial Dumbleodore",
    classeDoInput: "dumbleodore-input",
}

var listaDeQuartos = [grifinoria, sonserina, corvinal, lufa, dumbleodore];
var elementoQuartos = document.getElementById("quartos");
var dormitorioPresidencial = document.getElementById("dormitorio-presidencial");
var dormitorioPresidencialResponsivo = document.getElementById("responsivo");

listaDeQuartos.forEach(quarto => {

    if (quarto == dumbleodore) {
        var div = document.createElement("div");
        div.innerHTML = `
        
            <h3>${quarto.nome}</h3>
            <p>Diária</p>
            <p class="valor">R$: ${quarto.valor}</p>
            <a href="javascript:showModal('${quarto.nome}','${quarto.valor}', '${quarto.imagemBrasao}', '${quarto.classeDaImagem}', '${quarto.classeDoInput}', '${quarto.acessibilidadeBrasao}')" class="btn">Reservar</a>

            `
        dormitorioPresidencial.appendChild(div);
        var div2 = document.createElement("div");

        div2.innerHTML = `
        <h4>${quarto.nome}</h4>
        <p>Diária:</p>
         <p>${quarto.valor}</p>
        
         <a href="javascript:showModal('${quarto.nome}','${quarto.valor}', '${quarto.imagemBrasao}','${quarto.classeDaImagem}', '${quarto.classeDoInput}', '${quarto.acessibilidadeBrasao}')" class="btn">Reservar</a>
        `




        dormitorioPresidencialResponsivo.appendChild(div2)
    }
    else {
        var li = document.createElement("li");
        li.className = "quarto-item"
        li.innerHTML = ` <img src="${quarto.imagem}" class="${quarto.classeDaImagem}" alt="${quarto.acessibilidade}"></img>
    <h4>${quarto.nome}</h4>
    <p>Diária: </p>
    <p>R$: ${quarto.valor}</p>
    <a href="javascript:showModal('${quarto.nome}','${quarto.valor}', '${quarto.imagemBrasao}', '${quarto.classeDaImagem}', '${quarto.classeDoInput}', '${quarto.acessibilidadeBrasao}')" class="btn">Reservar</a>`

        elementoQuartos.appendChild(li)
    }


})

var modalBg = document.getElementById("modal-bg");
modalBg.style.display = "none";
var checkin, checkout, valorTotal;
var valorDiaria = 0;




function showModal(nome, valor, imagem, classeDaImagem, classeDoInput, acessibilidade) {
   
    valorDiaria = valor;

    modalBg.innerHTML = `
    <div class="modal">
                    <img src="${imagem}" class="${classeDaImagem}" alt="${acessibilidade}">
                    <div class="reserva">
                        <h3>${nome}</h3>
                        <form action="https://servidor-hotel.onrender.com/" method="POST">
                        <ul>
                            <li>
                                <input id="input-nome" type="text" placeholder="Digite seu nome completo" class="${classeDoInput}" required name="nome" autocomplete="off">
                            </li>
                            <li>
                                <input type="email" placeholder="Digite seu e-mail" class="${classeDoInput}" required name="email" autocomplete="off">
                            </li>
                            <li>
                                <input type="number" placeholder="Digite seu telefone" class="${classeDoInput}" required name="telefone" autocomplete="off">
                            </li>
                            <li class="form">
                                <input type="text" placeholder="Data checkin"
                                onfocus="(this.type='date')" onblur="(this.type='text')" class="${classeDoInput}" id="checkin" onchange="
                                    checkout.setAttribute('min', checkin.value)" required name="checkin" min="${dataConvertida}">
                                <input type="text"  placeholder="Data checkout"
                                onfocus="(this.type='date')" onblur="(this.type='text')" class="${classeDoInput}" id="checkout" onchange="simular()" required name="checkout">
                                <input type="text" class="${classeDoInput}" value="${valor}" readonly="readonly" id="valor" name="valorTotal">
                                <input type="text" style="display: none;" id="quartoSelecionado" value="${nome}" name="quartoReservado"> 
                            </li>
                        </ul>    
                            <button class="${classeDoInput}" type="submit">Reservar</button>
                        </form>
                                                   
                        </div>
    </div>
    `
    modalBg.style.display = "flex";
    checkin = document.getElementById("checkin");
    checkout = document.getElementById("checkout");
    valorTotal = document.getElementById("valor");
    var dataHoje = new Date()
    var dataConvertida = convertDate(dataHoje)

    checkin.setAttribute("min", dataConvertida);
    
    
    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
    }

    

}
function closeModal() {
    modalBg.style.display = "none"
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains('modal-bg') == true) {
        closeModal()
    }

})

var modalBgReserva = document.getElementById("modal-bg-reserva-concluida");
modalBgReserva.style.display = "none";

function showModalReserva() {
    closeModal();
    modalBgReserva.style.display = "flex";
}
function closeModalReserva() {
    modalBgReserva.style.display = "none";
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains('modal-bg-reserva-concluida') == true) {
        closeModalReserva()
    }

})


function simular() {
    comparar(checkin.value, checkout.value);
}

function comparar(checkin, checkout) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firsDate = new Date(checkin);
    const secondDate = new Date(checkout);
    var diffDays = Math.round(Math.abs((firsDate - secondDate) / oneDay));
    if(diffDays == 0) {
        diffDays = 1;
    }
    valorTotal.value = "R$ " + (diffDays * valorDiaria).toFixed(2).replace(".",",");
    return ("Diferença de dias: " + diffDays);

}
