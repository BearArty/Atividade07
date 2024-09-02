// inicia o script caso um nome/número for enviado
let poke = document.getElementById('poke');
poke.addEventListener("submit", function(event){
    event.preventDefault();

    // captura o link da api de acordo com o pokemon enviado
    let pokemon = document.getElementById("pokemon").value;
    const apiurl01 = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const apiurl2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;

    // local onde a url é enviada e os dados são convertidos em variáveis
    fetch(apiurl01)
    .then(response => response.json()).then(data => {
        const tipagem = data.types.map(tipoinfo => tipoinfo.type.name);

        // Local onde se obtem a descrição do pokemon
        fetch(apiurl2)
        .then(response => response.json()).then(dados => {
            document.getElementById("descricao").textContent = (dados.flavor_text_entries
                .find(entry => entry.language.url == 'https://pokeapi.co/api/v2/language/9/')?.flavor_text
                .replace(/[\f\n\r\t]/g, ' '))
        })

        // caso o pokemon exista, ele é mostrado na página html
        if(data){

            document.getElementById("nome").textContent = (data.name);
            document.getElementById("icone").innerHTML = `<img src="${data.sprites.front_default}" width="200" heigth="200" alt=Imagem do pokemon ${data.name}"/>`;
            document.getElementById("numero").textContent = ('N° Pokedex: '+ data.id);
            document.getElementById("tipos").textContent = ('Tipos: ' + tipagem);
            document.getElementById("peso").textContent = ('Peso: '+ data.weight / 10 + "kg");
            document.getElementById("altura").textContent = ('Altura do Pokémon: ' + data.height / 10 + "m");
          // caso o pokemon não exista, é mostrado um alerta na página html
        } else {
            alert("N° ou nome do pokemon não foram encontrados na pokedex!")
        }

    })
    // em caso de qualquer erro, ele é mostrado na página
    .catch(error => {
        alert('Ocorreu um erro: N° ou nome do pokemon não foram encontrados na pokedex', error);
    });
})

// inicia o script caso o botão de surpreenda for clicado
let surp = document.getElementById('surp');
surp.addEventListener("click", function(event){

    // gera um número aleatório para ser comparado a pokedex
    const num_ale = Math.floor(Math.random() * 1025) + 1;
    event.preventDefault();

    // captura o link da api de acordo com o número gerado
    const apiurl = `https://pokeapi.co/api/v2/pokemon/${num_ale}`;
    const apiurl2 = `https://pokeapi.co/api/v2/pokemon-species/${num_ale}`;

    // local onde a url é enviada e os dados são convertidos em variáveis
    fetch(apiurl)
    .then(response => response.json()).then(data => {
        const tipagem = data.types.map(tipoinfo => tipoinfo.type.name);

        // Local onde se obtem a descrição do pokemon
        fetch(apiurl2)
        .then(response => response.json()).then(dados => {
            document.getElementById("descricao").textContent = (dados.flavor_text_entries
                .find(entry => entry.language.url == 'https://pokeapi.co/api/v2/language/9/')?.flavor_text
                .replace(/[\f\n\r\t]/g, ' '))
        })

        // caso o pokemon exista, ele é mostrado na página html
        if(data){

            document.getElementById("nome").textContent = (data.name);
            document.getElementById("icone").innerHTML = `<img src="${data.sprites.front_default}" width="200" heigth="200" alt=Imagem do pokemon ${data.name}"/>`;
            document.getElementById("numero").textContent = ('N° Pokedex: '+ data.id);
            document.getElementById("tipos").textContent = ('Tipos: ' + tipagem);
            document.getElementById("peso").textContent = ('Peso: '+ data.weight /10 + "kg");
            document.getElementById("altura").textContent = ('Altura do Pokémon: ' + (data.height / 10) + "m");
        
            // Em caso de erro, notifica o usuário para tentar novamente
        } else {
            alert('Ocorreu um erro na busca, tente novamente');
        }

    })
    // em caso de qualquer erro, ele é mostrado na página
    .catch(error => {
        alert('Ocorreu um erro:', error);
    });

})

