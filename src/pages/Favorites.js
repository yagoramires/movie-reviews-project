import React from 'react';
import { Link } from 'react-router-dom';
import AddFavorite from '../components/AddFavorite';
import Card from '../components/Card';
import { useFetchData } from '../hooks/useFetchData';

const Favorites = ({ user }) => {
  const { documents: favorites } = useFetchData(`users/${user?.uid}/favorites`);
  console.log(favorites);
  return (
    <section className='flex flex-col items-center justify-start gap-10 py-16 sectionHeight lg:py-32'>
      <h1 className='mb-2 text-3xl font-bold sm:text-4xl xl:text-5xl'>
        <span className='text-yellow-400 border-b-4 border-black '>
          Favorites
        </span>
      </h1>
      <div className='grid items-start grid-flow-row grid-cols-1 gap-8 py-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {favorites &&
          favorites.length > 0 &&
          favorites?.map((movie) => (
            <div className='relative ' key={movie.id}>
              <Link to={`/details/${movie.id}`} className='flex items-center '>
                <Card
                  image={movie.image}
                  title={movie.title}
                  genre={movie.genre}
                  rating={movie.rating}
                />
              </Link>
              <div className='absolute top-0 right-0 p-2 bg-[rgba(0,0,0,0.7)] cursor-pointer'>
                <AddFavorite movieId={movie.id} user={user} />
              </div>
            </div>
          ))}
      </div>

      {favorites && favorites.length === 0 && (
        <p className='italic text-gray-400'>No favorites added</p>
      )}
    </section>
  );
};

export default Favorites;
