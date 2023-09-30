function salvarCadastro() {
    // Capturar o formulário
    const form = document.getElementById("form");
    // Verificar se todos os campos do formulário estão preenchidos

    if (form.checkValidity()) { 
        // Capturar os valores dos campos do formulário
        const placa = document.getElementById("placa").value;
        const proprietario = document.getElementById("proprietario").value;
        const apartamento = document.getElementById("apartamento").value;
        const bloco = document.getElementById("bloco").value;
        const modelo = document.getElementById("modelo").value;
        const cor = document.getElementById("cor").value;
        const vaga = document.getElementById("vaga").value;

        // Criar um objeto com os dados do formulário
        const dadosCadastro = {
            placa,
            proprietario,
            apartamento,
            bloco,
            modelo,
            cor,
            vaga
        };

        // Converter o objeto em uma string JSON
        const jsonString = JSON.stringify(dadosCadastro);

        // Mostrando JSON no console
        console.log("Mostrando dados como JSON:", jsonString);

        /*Lembrando que aqui a lógica para salvamento das informações no banco de dados seria desenvolvida */

        // Exibir pop-up de confirmação
        alert("Cadastro realizado com sucesso!");

        // Limpar o formulário após o cadastro
        form.reset();

    } else {
        // Se algum campo estiver em branco ou não for válido, exibir mensagem para usuário
        alert("Por favor, preencha todos os campos antes de salvar o cadastro.");
    }
}

function visualizarVagas() {
    window.open("vagas.html", "_self");
    /*Aqui pode ser implementada a lógica para busca no banco de dados das informações e listagem na tela de vagas*/
}

function removerCadastro() {
    // Solicita ao usuário o número da vaga que deseja remover
    const input = prompt("Digite o número da vaga que deseja remover (1-20):");
    // Mostrando no console informações relevantes
    console.log("Registro da vaga " + input + " será excluído e a página vagas.html será atualizada!" );

    /*A partir do número da vaga a implementação com o banco de dados iria excluir o registro específico se permitido*/
}
