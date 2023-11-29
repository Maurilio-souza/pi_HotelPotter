var modalBg = document.getElementById("modal-bg");
modalBg.style.display = "none";


/*
botao.addEventListener("click", (event)=>{
    event.preventDefault();
    showModal()
})
*/
function showModal (nome, valor, imagem, descricao, classeDaImagem, categoria, acessibilidade) {
    console.log(classeDaImagem)
    modalBg.innerHTML = `
    <div class="modal">
                    <img src="${imagem}" class="${classeDaImagem}" alt="${acessibilidade}">
                    <div>
                        <p class="detalhe-banquete">${nome}</p>
                        <p class="descricao-banquete">${descricao}</p>
                        <p class="preco-banquete">${valor} a
                            ${ categoria == "bebida" ? "dose" : "porção" }
                            </p>
                    </div>
                </div>
    `
    modalBg.style.display = "flex"
}
function closeModal () {
    modalBg.style.display = "none"
}

document.addEventListener("click", (event)=>{
    if (event.target.classList.contains('modal-bg') == true){
        closeModal()
    }

})