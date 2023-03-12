const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indece) => {
    botao.addEventListener('click',() => {

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
   
        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        imagens[indece].classList.add('ativa');
    })
})