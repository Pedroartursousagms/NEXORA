// ANIMAÇÃO AO ENTRAR NA TELA

const elementos = document.querySelectorAll(
    ".card, .feature-item, .screen, .experience-box"
);


const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });


}, {

    threshold: 0.15

});



elementos.forEach((elemento)=>{

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





// SCROLL SUAVE NOS LINKS


document.querySelectorAll("a").forEach(link=>{


    link.addEventListener("click",(evento)=>{


        const destino = document.querySelector(
            link.getAttribute("href")
        );


        if(destino){

            evento.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});





// EFEITO DE STATUS DA TELA


const status = document.querySelector(".status");


if(status){


    let conectado = true;


    setInterval(()=>{


        conectado = !conectado;


        if(conectado){

            status.innerHTML =
            '<span></span> Conectado';

        }else{


            status.innerHTML =
            '<span></span> Sincronizando...';


        }


    },3000);


}




// ANO AUTOMÁTICO DO FOOTER


const footer = document.querySelector("footer p");


if(footer){

    footer.innerHTML =
    "© " + new Date().getFullYear() +
    " NEXORA. Todos os direitos reservados.";

}