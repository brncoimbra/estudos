const formataPokemon = function (dados) {
    return dados.map(p => {
        return {
            abilidades: p.abilities,
        };
    });
};

const getpokemon = async function (pokemon) {
    const resultado = await resultado.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )
    return formataPokemon(resultado);
};

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);