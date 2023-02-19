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
    buttonRandomic.innerHTML = '<i class="fa-solid fa-x" style="--fa-beat-scale: 2.0;"></i>';
    buttonRandomic.style.left = posicaoy + 'px';
    buttonRandomic.style.top = posicaox + 'px';
    buttonRandomic.style.position = 'absolute';
    buttonRandomic.setAttribute("id", "no");
    buttonRandomic.onclick = clickShowButton;

    document.body.appendChild(buttonRandomic);
};


let control = 5;

let clickShowButtonYes = () => {

    if(control > 0){

    if (document.getElementById('yes')){
        document.getElementById('yes').remove()
    };

    let posicaox = Math.floor(Math.random() * alturaJanela) - 160;
    let posicaoy = Math.floor(Math.random() * larguraJanela) - 160;

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    let buttonRandomic = document.createElement('button');

    buttonRandomic.className = 'button';
    buttonRandomic.innerHTML = `<i class="fa-solid fa-beat" style="--fa-beat-scale: 2.0;">${control}`;
    buttonRandomic.style.left = posicaoy + 'px';
    buttonRandomic.style.top = posicaox + 'px';
    buttonRandomic.style.position = 'absolute';
    buttonRandomic.setAttribute("id", "yes");
    buttonRandomic.onclick = clickShowButtonYes;

    document.body.appendChild(buttonRandomic);

    control--;

    console.log(control)
}else{

    
    if (document.getElementById('yes')){
        document.getElementById('yes').remove()
    };

    let posicaox = Math.floor(Math.random() * alturaJanela) - 160;
    let posicaoy = Math.floor(Math.random() * larguraJanela) - 160;

    posicaox = posicaox < 0 ? 0 : posicaox;
    posicaoy = posicaoy < 0 ? 0 : posicaoy;

    let buttonRandomic = document.createElement('button');

    buttonRandomic.className = 'button';
    buttonRandomic.innerHTML = '<i class="fa-solid fa-beat" style="--fa-beat-scale: 2.0;">'+' '+'Agora vai!';
    buttonRandomic.style.left = posicaoy + 'px';
    buttonRandomic.style.top = posicaox + 'px';
    buttonRandomic.style.position = 'absolute';
    buttonRandomic.setAttribute("id", "yes");
    buttonRandomic.onclick = function() {
        window.location.href = "contact.html";  };
    
    document.body.appendChild(buttonRandomic);

    console.log(buttonRandomic)
}


};
