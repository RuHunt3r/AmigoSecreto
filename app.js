
let amigos = []
let amigosSorteados = [];

function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo == ""){
        alert("El panel esta vacío, ingresa un nombre");
    }else {
        amigos.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("No hay amigos para sortear");
    } else if(amigosSorteados.length == amigos.length){
        alert("Ya se sortaron todos los amigos");
    }
    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "Tu amigo secreto es: " + amigoSorteado;
    amigosSorteados.push(amigoSorteado);
}
