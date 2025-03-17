//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let txtAmigo = document.getElementById("amigo"); //input
let lstListaAmigos = document.getElementById("listaAmigos"); // paragrafo
let lstListaSorteio = document.getElementById("resultado"); // paragrafo

let listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = txtAmigo.value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome");
    } else {
        listaAmigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}

function atualizarLista() {
    lstListaAmigos.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaAmigos[i];
        lstListaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceAleatorio];

    lstListaSorteio.innerHTML = nomeSorteado;
}  