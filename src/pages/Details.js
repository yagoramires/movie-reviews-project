import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

// Icons
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

// Components
import Comments from '../components/Comments';
import { database } from '../firebase/config';

const Details = () => {
  const { id } = useParams();

  const [stars, setStars] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const loadDocument = async () => {
      const docRef = doc(database, 'reviews', id);
      const docSnap = await getDoc(docRef);

      setMovie(docSnap.data());
    };
    loadDocument();
  }, [id]);

  const setRatingStars = (size) => {
    const arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    if (movie) {
      setStars(setRatingStars(movie?.rating));
    }
  }, [movie]);

  return (
    <section className='flex items-center justify-center sectionHeight'>
      <div className='m-auto max-w-[1200px] w-[90%] mt-10'>
        <div className='flex gap-10'>
          <img
            src={movie.image}
            alt='poster'
            className='min-w-[500px] h-[700px] object-cover'
          />

          <div className='flex flex-col gap-10'>
            <h1 className='w-full text-6xl font-bold mt-[-10px]'>
              {movie.title}
            </h1>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                {stars.map((e) => (
                  <AiFillStar key={e} size={30} className='text-yellow-400' />
                ))}
              </div>
              <div className='flex items-center gap-4'>
                {/* <AddToFavorits data={movieData} movieId={id} /> */}
                <span className='text-2xl italic text-gray-500'>
                  {movie.genre}
                </span>
              </div>
            </div>
            <p className='text-xl text-justify '>{movie.description}</p>
          </div>
        </div>

        {/* Comments section */}
        <Comments />
      </div>
    </section>
  );
};

export default Details;
