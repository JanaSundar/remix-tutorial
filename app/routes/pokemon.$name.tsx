import { Link, LoaderFunction, useLoaderData } from 'remix';

export let loader: LoaderFunction = ({ params }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
};

const Pokemon = () => {
  const pokemon = useLoaderData();
  return (
    <div>
      <h1 className='title'>{pokemon.name}</h1>
      <div className='flex-col'>
        {pokemon.stats.map((stat: any) => (
          <div className='card' key={stat.stat.name}>
            <p>
              {stat.stat.name} - {stat.base_stat}
            </p>
          </div>
        ))}
      <Link to='/pokemon' className='link'>
        Go Back
      </Link>
      </div>
    </div>
  );
};

export default Pokemon;
