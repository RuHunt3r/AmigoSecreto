
let amigos = []
let inputAmigos = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let listaResultados = document.getElementById("resultado");

function agregarAmigo (){
    let nombre =inputAmigos.value.trim();
    if(nombre === ''){
        	alert('Ingrese un nombre por favor');
            return;
    }if (!amigos.includes(nombre)){
        amigos.push(nombre);
        actualizarLista();
    }else{
        alert('Ingresa un nuevo nombre de amigo');
    }
    inputAmigos.value = "";
}

function actualizarLista (){
    listaAmigos.innerHTML = "";
    for (let i=0; <amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function verificarArrayAmigos() {
    return amigos.length > 0;
}

function sortearAmigo() {
    listaResultados.innerHTML = "";

    if (!verificarArrayAmigos()) {
        alert("No hay amigos para sortear!");
        return;
    }
    
    let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAmigoSorteado];
    
    let li = document.createElement("li");
    li.textContent = nombreSorteado;
    listaResultados.appendChild(li);
    
    amigos.splice(indiceAmigoSorteado, 1);
    actualizarLista();
}