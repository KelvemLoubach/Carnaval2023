let larguraJanela = 0;
let alturaJanela = 0;

let ajusteTamanho = ()=>{
    larguraJanela = window.innerWidth;
    alturaJanela = window.innerHeight;
}

ajusteTamanho();




let clickShowButton = ()=>{

    if(document.getElementById('no')){
        document.getElementById('no').remove();
    }

       
let posicaox = Math.floor(Math.random()*alturaJanela)-120;
let posicaoy = Math.floor(Math.random()*larguraJanela)-120;

posicaox = posicaox < 0 ? 0 : posicaox;
posicaoy = posicaoy < 0 ? 0 : posicaoy;

console.log(posicaox,posicaoy);

let buttonRandomic = document.createElement('button');

buttonRandomic.className = 'btn1';
buttonRandomic.innerHTML = 'NÃO';
buttonRandomic.style.left = posicaoy + 'px';
buttonRandomic.style.top = posicaox + 'px';
buttonRandomic.style.position = 'absolute';
buttonRandomic.setAttribute("id", "no");
buttonRandomic.onclick = clickShowButton;

document.body.appendChild(buttonRandomic);

}




