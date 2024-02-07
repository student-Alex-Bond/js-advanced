const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

function getPocemonData (){
    fetch(URL)
    .then((data)=> data.json())
    .then( data => data.abilities[0].ability)
    .then((pokemon) => {
        fetch(pokemon.url)
            .then( data => data.json())
            .then(data =>{
                const answer = data.effect_entries[1].effect
                console.log(answer)   
            })
            .catch(e => console.error(e))
      
    });
}

getPocemonData();