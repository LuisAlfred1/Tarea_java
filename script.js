const texts = [
    "Hola, bievenido",
    "Esta es mi pagina web",
    "Visita nuestros enlaces",
    "Este es un párrafo."
];

let index=0;

document.getElementById("boton").addEventListener("click", function(){    
    document.getElementById("parrafo").textContent = texts[index];
    index++;

    if(index===texts.length){
        index = 0;
    }

});

document.getElementById("encabezado").addEventListener("mouseover", function(){
     this.style.color= "rgb(66, 235, 142)";
});

document.getElementById("encabezado").addEventListener("mouseout", function(){
    this.style.color = "black"
});