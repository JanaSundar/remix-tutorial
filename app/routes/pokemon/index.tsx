import { Link, LoaderFunction, useLoaderData } from 'remix';

interface pokemon {
  name: string;
  url: string;
}

export const loader: LoaderFunction = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon');
};

const PokemonList = () => {
  const allPokemon = useLoaderData();
  
  return (
    <div className='flex'>
      {allPokemon?.results?.map((pokemon: pokemon) => (
        <div key={pokemon.name} className='card'>
          <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} />
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
