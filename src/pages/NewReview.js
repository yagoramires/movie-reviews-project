import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useAddReview } from '../hooks/useAddReview';

const genreOptions = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Musical',
  'Mystery',
  'Romance',
  'Science Fiction',
  'Sports',
  'Thriller',
];

const NewReview = ({ user }) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const {
    addReview,
    error: firebaseError,
    success: firebaseSuccess,
    setError: firebaseSetError,
    setSuccess: firebaseSetSuccess,
    loading,
  } = useAddReview();

  const handleUpload = (e) => {
    e.preventDefault();
    firebaseSetError(null);
    firebaseSetSuccess(null);

    if (
      image === '' ||
      title === '' ||
      rating === '' ||
      genre === '' ||
      description === ''
    ) {
      setError('Empty fields');
      return;
    }

    const data = {
      user: user.uid,
      title,
      rating,
      genre,
      description,
    };

    addReview(data, image);
  };

  useEffect(() => {
    if (firebaseError) {
      setError(firebaseError);
    }
    if (firebaseSuccess) {
      setSuccess(firebaseSuccess);
      setImage(null);
      setTitle('');
      setRating(0);
      setGenre('');
      setDescription('');
    }
  }, [firebaseError, firebaseSuccess]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), 3000);
    }

    if (success) {
      setTimeout(() => setSuccess(''), 3000);
    }
  }, [error, success, loading]);

  return (
    <section className='flex flex-col items-center justify-center bg-amber-200 sectionHeight'>
      <h1 className='my-8 sm:text-xl md:text-2xl font-bold text-zinc-800 w-[90%] text-center '>
        Add a new movie for users to submit their opinions
      </h1>

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt='preview'
          className='max-w-[600px] w-[90%] object-cover mb-8 shadow-md rounded-md'
        />
      )}

      <form
        onSubmit={handleUpload}
        className='flex flex-col max-w-[600px] w-[90%] mx-auto gap-3 mb-16'
      >
        <input
          type='file'
          className='block w-full p-3 m-0 text-base font-normal text-gray-700 transition ease-in-out border-none rounded shadow-md bg-slate-50 form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          onChange={(e) => setImage(e.target.files[0])}
          disabled={loading ? true : false}
        />
        <input
          type='text'
          placeholder='Title'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          placeholder='Rating (0 - 5)'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          min={0}
          max={5}
          value={rating || ''}
          onChange={(e) => setRating(e.target.value)}
        />

        <select
          className={`p-4  rounded-md shadow-md outline-none bg-slate-50 ${
            genre === '' && 'text-gray-400'
          }`}
          value={genre || ''}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value='' className='disabled:text-gray-500' disabled>
            Genre
          </option>
          {genreOptions.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <textarea
          type='text'
          placeholder='Description'
          className='p-4 rounded-md shadow-md outline-none resize-none bg-slate-50 h-[200px]'
          value={description || ''}
          onChange={(e) => setDescription(e.target.value)}
        />

        {loading ? (
          <div className='flex items-center justify-center w-full'>
            <Loading size={'30px'} />
          </div>
        ) : (
          <input
            type='submit'
            value={'Upload Review'}
            className='w-full p-4 font-bold text-white transition-all duration-300 rounded-md shadow-sm cursor-pointer bg-zinc-800 hover:bg-zinc-700 hover:tracking-wider'
          />
        )}

        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
      </form>
    </section>
  );
};

export default NewReview;
