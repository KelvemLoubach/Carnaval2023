let larguraJanela = 0;
let alturaJanela = 0;

let ajusteTamanho = () => {
    larguraJanela = window.innerWidth;
    alturaJanela = window.innerHeight;
}

ajusteTamanho();

let clickShowButton = () => {

    if (document.getElementById('no')) {
        document.getElementById('no').remove();
    }

    let posicaox = Math.floor(Math.random() * alturaJanela) - 160;
    let posicaoy = Math.floor(Math.random() * larguraJanela) - 160;

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    let buttonRandomic = document.createElement('button');

    buttonRandomic.className = 'button';
    buttonRandomic.innerHTML = '<i class="fa-solid fa-x fa-flip"></i>';
    buttonRandomic.style.left = posicaoy + 'px';
    buttonRandomic.style.top = posicaox + 'px';
    buttonRandomic.style.position = 'absolute';
    buttonRandomic.setAttribute("id", "no");
    buttonRandomic.onclick = clickShowButton;

    document.body.appendChild(buttonRandomic);
};




