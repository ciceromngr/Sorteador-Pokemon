var lista = document.getElementById('list');

function loading(num) {
  let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
        console.log(data);
        document.querySelector("#nome").innerHTML = "Nome: " + data.name.replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase()
          })
          
          document.querySelector("#nomeAbilidade").innerHTML = "Tipo";

          let tipos = data.types.length

          for (let i = 0; i < tipos; i++) {

            let tipo = data.types[i].type.name;
            lista.innerHTML += "<li>" + tipo + "</li>";
          }
          let div_img = document.getElementById('imagem');
          let imagem_pokemon = `https://pokeapi.co/api/v2/evolution-trigger/${numero}/`
          tag_imagem = ` 
        <img class="imagem_pokemons" src="${imagem_pokemon}">
      `
          div_img.innerHTML = tag_imagem;
        })
      .catch(erro => {
        console.log("Error: " + erro);
      })
    }

  function sortear() {
    lista.innerHTML = '';
    numero = Math.floor(Math.random() * 150);
    if (numero == 0) {
      loading(numero + 1);
    } else {
      loading(numero);
    }

    let recebe = `https://pokeapi.co/api/v2/pokemon-form/${numero}/`;
    fetch(recebe)
    .then(response => {
      return response.json();
    })
    .then(data =>{
      console.log("Evolucion",data)
    })
    .catch(error => {
      console.log(error)
    })
  }