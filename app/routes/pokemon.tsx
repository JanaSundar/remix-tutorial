import { Link, LoaderFunction, Outlet } from 'remix';

export const loader: LoaderFunction = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon');
};

const AllPokemon = () => {
  return (
    <div className='pokemon'>
      <h1 className='title'>All Pokemon</h1>
      <Link to='/' className='link'>
        Go Back
      </Link>
      <Outlet />
    </div>
  );
};

export default AllPokemon;
