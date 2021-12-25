import { LoaderFunction } from '@remix-run/server-runtime';
import { Link, Outlet } from 'remix';

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
