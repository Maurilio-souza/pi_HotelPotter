var felixFelicis = {
    nome: "Félix Felicis",
    valor: "R$ 12,99",
    imagem: "img/Felix Felicis.webp",
    acessibilidade: "Imagem contendo uma bebida tematizada como a Félix Felicis de Harry Potter",
    classeDaImagem: "felix-felicis",
    descricao: "Felix Felicis, também conhecida como Sorte Líquida, é uma poção que traz sorte a quem a beber por um determinado período de tempo, no qual tudo que a pessoa tentar dará certo.",
    categoria: "bebida",
    
}
var cervejaAmanteigada = {
    nome: "Cerveja Amanteigada",
    valor: "R$ 19,99",
    imagem: "img/Cerveja_amanteigada-removebg-preview.png",
    acessibilidade: "Imagem contendo uma bebida tematizada como a Cerveja Amanteigada de Harry Potter",
    classeDaImagem: "cerveja-amanteigada",
    descricao: "É mistura de sorvete de creme, com soda, “temperada” com outros ingredientes como noz-moscada, cravo, açúcar mascavo e canela.",
    categoria: "bebida",
}
var pocaoPolissuco = {
    nome: "Poção Polissuco",
    valor: "R$ 7,99",
    imagem: "img/Poção polissuco.png",
    acessibilidade: "Imagem contendo uma bebida tematizada como a Poção Polissuco de Harry Potter",
    classeDaImagem: "pocao-polissuco",
    descricao: "Ela permite que o consumidor assuma a aparência física de outra pessoa, desde que tenha adquirido primeiro parte do corpo daquele indivíduo para adicionar à bebida",
    categoria: "bebida",
}
var amortentia = {
    nome: "Amortentia",
    valor: "R$ 15,99",
    imagem: "img/Amortentia.png",
    acessibilidade: "Imagem contendo uma bebida tematizada como a Amortentia de Harry Potter",
    classeDaImagem: "amortentia",
    descricao: "Amortentia é a mais poderosa poção do amor que existe. Ela provoca uma paixão poderosa ou obsessão no bebedor.",
    categoria: "bebida",
}

var ListaDeDrinks = [felixFelicis, cervejaAmanteigada, pocaoPolissuco, amortentia,];

var saposDeChocolate = {
    nome: "Sapos de Chocolate",
    valor: "R$ 14,99",
    imagem: "img/Sapos de chocolate.png",
    acessibilidade: "Imagem contendo um prato de comida como os Sapos de Chocolate de Harry Potter",
    classeDaImagem: "sapos",
    descricao: "Sapos de Chocolate são doces populares que são vendidos em todo o mundo bruxo. Eles são embalados com cartões colecionáveis ​​que retratam famosos bruxos e bruxas."
    
}
var feijoesDeTodosOsSabores = {
    nome: "Feijões de todos os sabores",
    valor: "R$ 12,99",
    imagem: "img/Feijões.png",
    acessibilidade: "Imagem contendo um prato de comida como os Feijões de Todos os sabores de Harry Potter",
    classeDaImagem: "feijoes",
    descricao:"É uma aventura a cada mordida! Mas cuidado: você nunca sabe o que vai encontrar dentro de cada embalagem. Será que você tem coragem de provar todos os sabores? "
    
}
var bangerAndMash = {
    nome: "Bangers and Mash",
    valor: "R$ 25,99",
    imagem: "img/bangers.png",
    acessibilidade: "Imagem contendo um prato de comida denominado Bangers and mash",
    classeDaImagem: "bangers",
    descricao:"Bangers and mash é um prato muito popular no Reino Unido. É composto basicamente de salsichas servidas com purê de batata."
    
}
var fishAndChips = {
    nome: "Fish and Chips",
    valor: "R$ 32,99",
    imagem: "img/chips.png",
    acessibilidade: "Imagem contendo um prato de comida denoninado Fish and chips",
    classeDaImagem: "chips",
    descricao: "Consiste em peixe frito acompanhado por batatas fritas. Além do Reino Unido, também se popularizou na Austrália e na Nova Zelândia. "
    
   
}

var listaDeAperitivos = [saposDeChocolate, feijoesDeTodosOsSabores, bangerAndMash, fishAndChips];

var elementoDrinks = document.getElementById("drinks");


ListaDeDrinks.forEach(drink=>{
    var li = document.createElement("li")
    li.className = "drink-item"
    li.innerHTML = ` <img src="${drink.imagem}" class="${drink.classeDaImagem}" alt="${drink.acessibilidade}"></img>
    <h4>${drink.nome}</h4>
    <p>Dose:</p>
    <p>${drink.valor}</p>
    <a href="javascript:showModal('${drink.nome}','${drink.valor}', '${drink.imagem}', '${drink.descricao}', '${drink.classeDaImagem}', '${drink.categoria}', '${drink.acessibilidade}')" class="btn">Saiba Mais</a>`

    elementoDrinks.appendChild(li)
    
})

var elementoAperitivos = document.getElementById("aperitivos")

listaDeAperitivos.forEach(aperitivo=>{
    var li = document.createElement("li")
    li.className = "drink-item"
    li.innerHTML = ` <img src="${aperitivo.imagem}" class="${aperitivo.classeDaImagem}" alt="${aperitivo.acessibilidade}"></img>
    <h4>${aperitivo.nome}</h4>
    <p>Porção</p>
    <p>${aperitivo.valor}</p>
    <a href="javascript:showModal('${aperitivo.nome}','${aperitivo.valor}', '${aperitivo.imagem}', '${aperitivo.descricao}', '${aperitivo.classeDaImagem}', '${aperitivo.categoria}', '${aperitivo.acessibilidade}')" class="btn">Saiba Mais</a>`

    elementoAperitivos.appendChild(li)
})
