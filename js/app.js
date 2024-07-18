let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

     // Validar se contém números
     if (/\d/.test(amigo)) {
        alert('Nomes não podem conter números.');
        return;
    }

    // Forçar a primeira letra de cada palavra a ser maiúscula
    amigo = amigo.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });

    // Verificar se o nome do amigo já está incluído na lista
    if (amigo !== '') {
        if (!amigos.includes(amigo)) {
            amigos.push(amigo);

            if (lista.textContent == '') {
                lista.textContent = amigo;
            } else {
                lista.textContent += ', ' + amigo;
            }
            amigo = '';
        } else {
            alert('Esse amigo já foi adicionado.');
        }
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Habilitar para sortear apenas com 3+ amigos
function sortear() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para sortear.');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '>>' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '>>' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

//Algoritmo Fisher-Yates para embaralhar o array
function embaralhar(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}