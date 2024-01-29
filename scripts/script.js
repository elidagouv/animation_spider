// Adquira a referência do elemento 'spider'
var spiderElement = document.getElementById('spider');

// Adicione um ouvinte de eventos para chamar a função minhaAnimacao quando o elemento 'spider' for clicado
spiderElement.addEventListener('click', minhaAnimacao);

// Defina a função minhaAnimacao
function minhaAnimacao() {
    // Adquira a referência do elemento 'spider' novamente
    var spiderElement = document.getElementById('spider');

    // Adicione a classe de animação
    spiderElement.classList.add('minhaAnimacao');

    // Opcional: Remova a classe após a animação para permitir futuros cliques
    setTimeout(function () {
        spiderElement.classList.remove('minhaAnimacao');
    }, 600); // Tempo de duração da animação (em milissegundos)
}
