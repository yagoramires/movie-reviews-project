import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import Card from '../components/Card';

const Home = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className='max-w-[1200px] w-[90%] mx-auto sectionHeight'>
      <div className='flex items-center justify-between gap-4 pb-8 mt-10 mb-8 border-b-4 border-yellow-400'>
        <div>
          <h1 className='mb-2 text-5xl font-bold md:text-4xl'>
            <span className='text-yellow-400'>Latest </span>{' '}
            <span className='border-b-4 border-black'>reviews</span>
          </h1>
          <p className='mt-4 text-xl italic text-gray-500 md:text-sm'>
            Be sure not to miss these reviews today.
          </p>
        </div>
        <form
          className='relative flex w-[600px] md:w-[300px]'
          onSubmit={handleSearch}
        >
          <input
            type='text'
            placeholder='Write a movie name ...'
            className='items-center justify-center w-full p-4 italic border-2 border-yellow-400 rounded-md outline-none text-start bg-gray-50 placeholder:text-yellow-400'
          />
          <input
            type='submit'
            value='Search'
            className='absolute right-0 items-center justify-center p-4 font-bold text-white bg-yellow-400 border-2 border-yellow-400 cursor-pointer rounded-r-md'
          />
        </form>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-4'>
        <Link to='/details/:id'>
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Home;
