import React, { useState } from 'react';

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

const NewReview = () => {
  const [image, setImage] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
  };
  return (
    <section className='flex flex-col items-center justify-center sectionHeight'>
      <h1 className='my-8 text-3xl font-bold text-yellow-400 uppercase border-b-4 border-black '>
        Add new review
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
        />
        <input
          type='text'
          placeholder='Title'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
        />
        <input
          type='number'
          placeholder='Rating (0 - 5)'
          className='p-4 rounded-md shadow-md outline-none bg-slate-50'
          min={0}
          max={5}
        />

        <select className='p-4 rounded-md shadow-md outline-none bg-slate-50'>
          <option value='' className='text-gray-700'>
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
        />

        <input
          type='submit'
          value={'Upload Review'}
          className='w-full p-4 font-bold text-white transition-all duration-300 bg-yellow-400 rounded-md shadow-sm cursor-pointer hover:bg-yellow-300 hover:tracking-wider'
        />
      </form>
    </section>
  );
};

export default NewReview;
