function fetchPokedex(){

    for(let i = 1; i<11; i++){

    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
    .then(respon =>{
       return respon.json();
    })
    .then(data =>{
        let pokemon = {
            Name:data.forms[0].name,
            Ability:data.abilities[0].ability.name,
            Type:data.types.map((type) => type.type.name).join(', '),
            Weight:data.weight,
            Img:data.sprites.front_default
        };

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute("src",pokemon.Img);
  img.setAttribute("width", "304");
  img.setAttribute("height", "228");
  img.setAttribute("alt", "The Pulpit Rock");
            div.appendChild(img);

       let name = document.createElement('p');
       name.innerText = pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1);
       
    div.appendChild(name);

            let ability = document.createElement('p');
            ability.innerText = "Ability: " +pokemon.Ability.charAt(0).toUpperCase() + pokemon.Ability.slice(1);

            div.appendChild(ability);

    let type = document.createElement('p');
    type.innerText =  "Type: " + pokemon.Type.charAt(0).toUpperCase() + pokemon.Type.slice(1);

        div.appendChild(type);

        let weight = document.createElement('p');
        weight.innerText = "Weight: " + pokemon.Type.charAt(0).toUpperCase() + pokemon.Type.slice(1);

                document.body.appendChild(div);

        console.log(pokemon);
    })
}
}

fetchPokedex();



   






    
