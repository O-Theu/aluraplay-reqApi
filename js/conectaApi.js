async function listaVideos() {
    const res = await fetch('http://localhost:3000/videos');
    const data = await res.json();

    return data;
};

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o video");
    }
    const data = await conexao.json();
    
    return data;
}

async function buscaVideo(termoBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`);
    const data = await conexao.json();

    return data;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
