/*ativação do menu mobile*/
let botao = document.querySelector(".menu__toggle");
let menu = document.querySelector(".menu__navegacao__mobile");
botao.addEventListener('click', () => { menu.classList.toggle("ativo"); });
/*fechamento do menu mobile ao clicar em um link*/

/*chave de acesso do emailjs*/
(function () {
    emailjs.init("AHMWvse1Pkhc19ITm");
})();

/*todo o formulario*/
let formulario = document.getElementById('formularioContato');

formulario.addEventListener('submit', function (event) {
    event.preventDefault() //nao deixa carregar a pagina*/

    let nome = formulario.nome.value.trim();
    let email = formulario.email.value.trim();
    let mensagem = formulario.mensagem.value.trim();

    let erro = document.getElementById("mensagemDeErro");

    if (nome === "" || email === "" || mensagem === "") {
        erro.textContent = "Por favor, preencha todos os campos.";
        return;
    } else {
        erro.textContent = "";
    }

    /*envio de email*/
    emailjs.sendForm('service_z4kbs4a', 'template_0s37th3', this)
        .then(function () {
            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        }, function (error) {
            erro.textContent = "Erro ao enviar mensagem.";
            console.log(error);
        });

    console.log("enviando...");
});