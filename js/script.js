document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroSenha').textContent = '';
    document.getElementById('erroConfirm').textContent = '';

    let valid = true;

    const nome = document.getElementById('name').value;
    if (nome.trim() == '') {
        document.getElementById('erroNome').textContent = 'O nome é obrigatório.';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('erroEmail').textContent = 'Insira um e-mail válido.';
        valid = false;
    }

   
    const senha = document.getElementById('senha').value;
    if (senha.length < 6) {
        document.getElementById('erroSenha').textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false;
    }

    const confirmacao = document.getElementById('Confirmação').value;
    if (confirmacao !== senha) {
        document.getElementById('erroConfirm').textContent = 'As senhas não estão iguais';
        valid = false;
    }

    if (valid) {
        alert('Formulário enviado com sucesso!');
        window.location.reload();
    }
});