// ANIMAÇÃO AO APARECER NA TELA

const elementos = document.querySelectorAll(
    ".card, .step, .about-box div, .hero-text, .hero-visual"
);


const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.15

});



elementos.forEach((elemento)=>{

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "0.8s ease";

    observer.observe(elemento);

});




// EFEITO NOS BOTÕES

const botoes = document.querySelectorAll("button");


botoes.forEach((botao)=>{


    botao.addEventListener("mouseenter",()=>{

        botao.style.transform = "scale(1.05)";

    });



    botao.addEventListener("mouseleave",()=>{

        botao.style.transform = "scale(1)";

    });


});




// BOTÃO COMEÇAR

const iniciar = document.querySelector(".primary-btn");


if(iniciar){

    iniciar.addEventListener("click",()=>{

        document
        .querySelector("#recursos")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}




// EFEITO DE DIGITAÇÃO NA IA

const textoIA = document.querySelector(".ai-card p");


if(textoIA){

    const textoOriginal = textoIA.innerHTML;

    textoIA.innerHTML = "";

    let contador = 0;


    function escrever(){

        if(contador < textoOriginal.length){

            textoIA.innerHTML += textoOriginal.charAt(contador);

            contador++;

            setTimeout(escrever,50);

        }

    }


    setTimeout(escrever,800);

}




// ANO AUTOMÁTICO NO FOOTER

const ano = document.querySelector("footer p");


if(ano){

    ano.innerHTML = 
    "© " + new Date().getFullYear() +
    " NEXORA. Todos os direitos reservados.";

}