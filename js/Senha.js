document.querySelector('#btnSenha').addEventListener('click', () => {

    //recuperar o elemento HTML que receberá a Senha
    getSenha = document.querySelector('#senha');
    const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '&', '*', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let novaSenha = '';

    //for para gerar a Senha = 67 caracteres
    for (let i = 0; i < 30; i++) {

        //sortear um número que representa o índice do Array
        let numero = Math.round(Math.random() * 66);

        //montar a senha - atribuir o conteúdo com o índice da variável
        novaSenha += caracteres[numero];
    }

    //exibindo a senha na página
    getSenha.textContent = novaSenha;
});


//função Copia a Senha para a área de tranferência

//document.execCommand('copy') seria a instrução mais comum, mas ela foi substituída pela API da área de tranferência, adicionada aos navegadores. Por ser uma API, seus métodos são Promise(), então podemos usar wait para fazer alguma coisa após a sua execução. Para copiar, use o método writeText(COPIAR ARQUIVOS), sendo disponível ao objeto navigator.


document.querySelector('#btnCopia').addEventListener('click', () => {
    const senha = document.querySelector('#senha').innerText;
    if (senha.length == 0) {
        alert('Precisa gerar a senha')
    } else {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(senha).then(() => {
                alert('Senha copiada')
            });
        }
    }
})