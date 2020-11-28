let results1;
let api = `https://pokeapi.co/api/v2/pokemon?limit=0&offset=0`;
let pokemon_api;
let div = document.createElement("div");

 fetch(api)
    .then(data => {
        return data.json();
        
    })
    .then(d =>{
        for(var i = 0; i<20; i++){
            results1 = d.results;
            console.log(results1[i].name);

        pokemon_api = results1[i].url;
        console.log(pokemon_api);   

            fetch(pokemon_api)
                .then(res =>{
                    return res.json();
                })
                .then(dat =>{
                    console.log(dat.type.name);
                })



   let paraa = document.createElement('p');

          // paraa.className

            paraa.innerText = results1[i].name;
        document.body.appendChild(paraa);

    }

    }
    );



   






    