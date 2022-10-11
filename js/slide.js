function PassarFoto(){
    var contador = 0
    const listaImagens = ["/assets/img/foto-perfil.jpg","/assets/img/imagem_teste.jfif"]

    const setaDireita = document.getElementById('setaDireita')
    const imgProjeto = document.getElementById("foto-projeto")
    setaDireita.addEventListener('click', ()=>{
        if(contador>=listaImagens.length){
            contador = 0
        }
        else{
            imgProjeto.src = listaImagens[contador]
            contador++
        }
        console.log(contador)
    })
}

PassarFoto()