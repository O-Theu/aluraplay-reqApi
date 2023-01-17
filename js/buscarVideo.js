import { conectaApi } from "./conectaApi.js";
import { constroiCard } from "./mostrarVideos.js";

async function buscarVideo(e) {
    e.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;

    const busca = await conectaApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(item => lista.appendChild(
        constroiCard(item.titulo, item.descricao, item.url, item.imagem)))
    
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com esse termo</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-btn-pesquisa]");

botaoPesquisa.addEventListener('click', e => buscarVideo(e));

