import { Link } from 'remix';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='title'>Remix Pokemon API Tutorial</h1>
      <Link to='/pokemon' className='link'>
        Get Started
      </Link>
    </div>
  );
};

export default Home;
